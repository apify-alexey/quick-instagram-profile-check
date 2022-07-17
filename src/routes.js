const Apify = require('apify');

const { extractProfile } = require('./extract');
const { extendFunction } = require('./extend-scraper');

const { utils: { log } } = Apify;

exports.apiProfileRequest = (url) => {
    if (!url) {
        return [];
    }
    const transformUrl = new URL(url?.toLowerCase());
    const profile = transformUrl.pathname.split('/').filter((x) => x).shift();
    if (!profile || !transformUrl.host === 'www.instagram.com' || transformUrl.pathname.startsWith('/p/')) {
        log.warning(`[WRONG_URL]: ${url}`);
        return [];
    }

    const apiRequest = {
        url: `https://i.instagram.com/api/v1/users/web_profile_info/?username=${profile}`,
        headers: {
            'x-ig-app-id': '936619743392459',
            // eslint-disable-next-line max-len
            'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 105.0.0.11.118 (iPhone11,8; iOS 12_3_1; en_US; en-US; scale=2.00; 828x1792; 165586599)',
        },
        userData: {
            origin: url,
        },
    };
    return [apiRequest];
};

exports.handleProfileJson = async ({ request, json }, input) => {
    const externalUrl = request?.userData?.origin || request.url;
    if (!(json && json?.data?.user)) {
        throw new Error(`Profile not found ${externalUrl}`);
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

    const output = {
        ...dataObject,
        externalUrl,
    };
    await extendOutputFunction(output);
};
