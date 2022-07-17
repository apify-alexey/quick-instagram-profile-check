const Apify = require('apify');

const { apiProfileRequest, handleProfileJson } = require('./src/routes');

const { utils: { log } } = Apify;

Apify.main(async () => {
    const input = await Apify.getInput();
    const {
        directUrls = [],
        proxy = { useApifyProxy: true },
        maxRequestRetries,
        debugLog = false,
    } = input;

    if (!input.extendOutputFunction) {
        // input.extendOutputFunction = 'async ({ item }) => { return item; }';
    }
    if (debugLog) {
        log.setLevel(log.LEVELS.DEBUG);
    }

    const requestList = await Apify.openRequestList('start-urls', directUrls.flatMap(apiProfileRequest));
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
        handlePageFunction: async (context) => {
            handleProfileJson(context, input);
        },
    });

    await crawler.run();
    log.info('*** Crawl finished ***');
});
