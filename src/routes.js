const Apify = require('apify');

const { utils: { log } } = Apify;

const jsonFromHtml = (body) => {
    const htmlPrefix = 'window.__additionalDataLoaded(\'extra\',';
    const htmlPostfix = '});';
    const idxPrefix = body.indexOf(htmlPrefix);
    const idxPostfix = body.indexOf(htmlPostfix, idxPrefix);
    const jtext = body.substr(idxPrefix + htmlPrefix.length, idxPostfix - idxPrefix - htmlPrefix.length + 1);
    return JSON.parse(jtext);
};

exports.handleInitialInlineJson = async ({ request, body }) => {
    const inlineJson = jsonFromHtml(body);

    if (inlineJson?.username) {
        log.info(`[PROFILE]: ${inlineJson?.username}`);
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
    } else {
        log.info(`[MEDIA]: ${request.url}`);
    }
    const dataObject = inlineJson?.shortcode_media || inlineJson;
    await Apify.pushData({
        url: request?.userData?.origin || request.url,
        ...dataObject,
    });
};
