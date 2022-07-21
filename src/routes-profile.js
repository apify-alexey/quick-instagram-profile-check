const Apify = require('apify');

const { extractProfile } = require('./extract');
const { extendFunction } = require('./extend-scraper');
const { mobileClientHeaders, postClientHeaders } = require('./consts');

const { utils: { log } } = Apify;

exports.apiProfileOrPostRequest = (url) => {
    if (!url) {
        return [];
    }
    const transformUrl = new URL(url);
    const profile = transformUrl.pathname.split('/').filter((x) => x).shift();
    if (!profile || !transformUrl.host === 'www.instagram.com') {
        log.warning(`[WRONG_URL]: ${url}`);
        return [];
    }

    const isPost = profile.toLowerCase() === 'p';
    if (isPost) {
        transformUrl.searchParams.set('__a', '1');
        transformUrl.searchParams.set('__d', 'dis');
    }
    const apiRequest = {
        url: isPost ? transformUrl.toString() : `https://i.instagram.com/api/v1/users/web_profile_info/?username=${profile}`,
        headers: isPost ? postClientHeaders : mobileClientHeaders,
        userData: {
            origin: url,
            isPost,
        },
    };
    return [apiRequest];
};

exports.handleProfileJson = async ({ request, json }, input, requestQueue) => {
    const { resultsLimit } = input;
    const inputUrl = request?.userData?.origin || request.url;
    if (!(json && json?.data?.user)) {
        log.debug(`Profile not found ${inputUrl}`, { json });
        throw new Error('[PROFILE-NOT-FOUND]');
    }
    const extendOutputFunction = await extendFunction({
        output: async (data) => {
            if (!data) {
                return;
            }
            await Apify.pushData(data);
        },
        input,
        key: 'extendOutputFunction',
    });

    const dataObject = extractProfile(json.data.user);
    log.debug(`${dataObject?.latestPosts?.length} posts out of ${resultsLimit} for ${dataObject?.username}`);
    if (!resultsLimit || dataObject?.latestPosts?.length >= resultsLimit) {
        // if we got all posts till the end of results save it
        await extendOutputFunction(dataObject);
    } else {
        // if not add to separate requestQueue to process by postsCrawler
        requestQueue.addRequest({
            url: `https://i.instagram.com/api/v1/feed/user/${dataObject.id}/`,
            headers: mobileClientHeaders,
            userData: {
                ...request.userData,
                profile: dataObject,
                posts: [],
            },
        });
    }
};
