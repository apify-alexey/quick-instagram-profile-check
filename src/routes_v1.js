// Version 1 OBSOLETE
// IG removed embeds for profiles
// backup copy in case if they will restore embeds

const Apify = require('apify');

const { extractProfile } = require('./extract');
const { formatSinglePost } = require('./graphql-lib');
const { extendFunction } = require('./extend-scraper');

const { utils: { log } } = Apify;

const jsonFromHtml = (body) => {
    const htmlPrefix = 'window.__additionalDataLoaded(\'extra\',';
    const htmlPostfix = '});';
    const idxPrefix = body.indexOf(htmlPrefix);
    const idxPostfix = body.indexOf(htmlPostfix, idxPrefix);
    const jtext = body.substr(idxPrefix + htmlPrefix.length, idxPostfix - idxPrefix - htmlPrefix.length + 1);
    return JSON.parse(jtext);
};

exports.handleInitialInlineJson = async ({ request, body }, input) => {
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

    const inlineJson = jsonFromHtml(body);

    let dataObject;
    if (inlineJson?.username) {
        log.info(`[PROFILE]: ${inlineJson?.username}`);
        dataObject = extractProfile(inlineJson);
        /*
        if (followLinks) {
            const mediaNodes = inlineJson?.graphqlMedia?.map((x) => x.shortcode_media) || [];
            for (const node of mediaNodes) {
                if (!node?.shortcode) {
                    log.warning('[NOSHORTCODE]', node);
                }
                await crawler.requestQueue.addRequest({
                    url: `https://www.instagram.com/p/${node?.shortcode}/embed`,
                });
            }
        }
        */
    } else if (inlineJson?.shortcode_media) {
        log.info(`[POST]: ${inlineJson?.shortcode_media?.shortcode}`);
        dataObject = formatSinglePost(inlineJson.shortcode_media);
    } else {
        log.info(`[MEDIA]: ${request.url}`);
        dataObject = inlineJson;
    }

    const output = {
        ...dataObject,
        externalUrl: request?.userData?.origin || request.url,
    };
    await extendOutputFunction(output);
    // await Apify.pushData();
};

/*
const path = require('path');

        preNavigationHooks: [
            async (context) => {
                const url = context?.request?.url?.toLowerCase();
                if (url?.endsWith('/embed') || url?.includes('/embed/')) {
                    return;
                }
                // keep original url for future reference
                context.request.userData = { ...context.request.userData, origin: url };
                // transform original url into embed url
                const originalUrl = new URL(url);
                const originalPath = originalUrl?.pathname;
                const additionalPath = '/embed';
                const fullEmbedUrl = new URL(path.join(originalPath, additionalPath), originalUrl.origin).toString();
                context.request.url = fullEmbedUrl;
            },
        ],
        handlePageFunction: async (context) => {
            try {
                // known issue - old posts have embeds without inline json
                // thats why there is no additional paring for posts:
                // when its a new post its inline json exactly the same as in profile
                // if its older post there is html markup with counters, but not enough data to consider it valuable
                await handleInitialInlineJson(context, input);
            } catch (err) {
                log.error(`[PARSING]: ${err?.message || err}`);
                if (debugLog) {
                    await Apify.setValue('lastError', context.body, { contentType: 'text/html' });
                }
                throw err;
            }
        },

const extractEmbedJsonFromProfile = (apiDataObject) => {
    const owner = apiDataObject?.graphqlMedia?.find((x) => x?.shortcode_media?.owner)?.shortcode_media?.owner;
    const mappedData = {
        id: owner?.id,
        username: owner?.username || apiDataObject?.username,
        fullName: apiDataObject?.fullName,
        externalUrl: null,
        followersCount: owner?.edge_followed_by?.count || apiDataObject?.followersCount,
        verified: apiDataObject?.isVerified,
        profilePicUrl: owner?.profile_pic_url,
        profilePicUrlHD: apiDataObject?.profilePicUrl,
        postsCount: owner?.edge_owner_to_timeline_media?.count,
        latestPosts: [],
    };

    mappedData.latestPosts = apiDataObject?.graphqlMedia?.map((x) => x.shortcode_media).map(formatSinglePost);
    // owner full name is not exists in post embeds, so we enforcing it from parent dara object
    mappedData.latestPosts?.forEach((x) => { x.ownerFullName = x?.ownerFullName || mappedData?.fullName; });

    return mappedData;
};

*/
