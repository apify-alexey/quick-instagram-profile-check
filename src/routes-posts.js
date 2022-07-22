const Apify = require('apify');

const { formatSinglePost, mapAPIPostData } = require('./graphql-lib');
const { mobileClientHeaders } = require('./consts');

const { utils: { log } } = Apify;

const handleFeedUser = async ({ request, json, crawler }, { resultsLimit }) => {
    const { url, userData: { profile, posts } } = request;
    if (!(json && json?.status === 'ok')) {
        log.debug(`Feed not found ${url}`, { json });
        throw new Error('[FEED-NOT-FOUND]');
    }

    if (json?.items?.length) {
        request.userData.posts.push(...json.items);
        // await Apify.pushData(json); return;
    }

    const isResultsLimitNotReached = resultsLimit ? posts.length < resultsLimit : true;
    if (isResultsLimitNotReached && posts.length < profile.postsCount && json.more_available && json.next_max_id && json.auto_load_more_enabled) {
        const nextUrl = new URL(url);
        nextUrl.searchParams.set('max_id', json.next_max_id);
        await crawler.requestQueue.addRequest({
            url: nextUrl.toString(),
            headers: mobileClientHeaders,
            userData: {
                ...request.userData,
            },
        });
        return;
    }

    await saveProfileData(request.userData);
};

// if getting posts feed fails then save previously parsed profile data
const saveProfileData = async (userData) => {
    if (userData?.posts?.length) {
        // await Apify.setValue(userData.profile.username, userData.profile);
        await Apify.pushData(userData.posts.map(mapAPIPostData));
    } else {
        await Apify.pushData(userData.profile);
    }
};

const handlePostJson = async ({ request, json }) => {
    const { url } = request;
    if (!(json && json?.graphql?.shortcode_media)) {
        log.debug(`Post not found ${url}`, { json });
        throw new Error('[POST-NOT-FOUND]');
    }
    await Apify.pushData(formatSinglePost(json.graphql.shortcode_media));
};

module.exports = {
    handleFeedUser,
    saveProfileData,
    handlePostJson,
};
