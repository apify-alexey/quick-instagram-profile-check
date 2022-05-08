const Apify = require('apify');
const path = require('path');

const { handleInitialInlineJson } = require('./src/routes');

const { utils: { log } } = Apify;

Apify.main(async () => {
    const input = await Apify.getInput();
    const {
        startUrls,
        proxy = { useApifyProxy: true },
        maxRequestRetries,
        debugLog = false,
    } = input;

    if (debugLog) {
        log.setLevel(log.LEVELS.DEBUG);
    }

    const requestList = await Apify.openRequestList('start-urls', startUrls);
    const requestQueue = await Apify.openRequestQueue();
    const proxyConfiguration = await Apify.createProxyConfiguration(proxy);

    const crawler = new Apify.CheerioCrawler({
        requestList,
        requestQueue,
        proxyConfiguration,
        maxConcurrency: 50,
        maxRequestRetries,
        useSessionPool: false,
        persistCookiesPerSession: false,
        preNavigationHooks: [
            async (context) => {
                const url = context?.request?.url;
                if (url?.endsWith('/embed')) {
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
                await Apify.setValue('lastError', context.body, { contentType: 'text/html' });
                throw err;
            }
        },
    });

    await crawler.run();
    log.info('*** Crawl finished ***');
});
