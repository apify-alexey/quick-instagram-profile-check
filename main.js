const Apify = require('apify');

const { apiProfileOrPostRequest, handleProfileJson } = require('./src/routes-profile');
const { handleFeedUser, handlePostJson, saveProfileData } = require('./src/routes-posts');

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

    const apiUrls = directUrls.flatMap(apiProfileOrPostRequest);
    const profileUrls = apiUrls.filter((x) => !x?.userData?.isPost);
    const singlePostUrls = apiUrls.filter((x) => x?.userData?.isPost);

    const requestList = await Apify.openRequestList('start-urls', profileUrls);
    const requestQueue = await Apify.openRequestQueue();
    let proxyConfiguration = await Apify.createProxyConfiguration(proxy);

    if (profileUrls?.length) {
        const profilesCrawler = new Apify.CheerioCrawler({
            requestList,
            proxyConfiguration,
            maxConcurrency: 50,
            maxRequestRetries,
            useSessionPool: false,
            persistCookiesPerSession: false,
            handlePageFunction: async (context) => {
                return handleProfileJson(context, input, requestQueue);
            },
        });
        await profilesCrawler.run();
        log.info('*** Profiles crawl finished ***');
    }

    for (const singlePost of singlePostUrls) {
        await requestQueue.addRequest(singlePost);
    }

    /*
    const isEmpty = await requestQueue.isEmpty();
    if (isEmpty) {
        return;
    }
    */

    proxyConfiguration = await Apify.createProxyConfiguration({ ...proxy, groups: ['RESIDENTIAL'] });
    const postsCrawler = new Apify.CheerioCrawler({
        requestQueue,
        proxyConfiguration,
        maxConcurrency: 50,
        maxRequestRetries,
        useSessionPool: false,
        persistCookiesPerSession: false,
        handlePageFunction: async (context) => {
            const url = context?.request?.url;
            if (url.includes('api/v1/feed/user/')) {
                return handleFeedUser(context, input);
            }
            if (url.startsWith('https://www.instagram.com/p/')) {
                return handlePostJson(context);
            }
        },
        handleFailedRequestFunction: async (context) => {
            const url = context?.request?.url;
            if (url.includes('api/v1/feed/user/')) {
                await saveProfileData(context?.request?.userData);
            }
        },
    });

    await postsCrawler.run();
    log.info('*** Posts crawl finished ***');
});
