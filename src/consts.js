const mobileClientHeaders = {
    // 'x-ig-app-id': '936619743392459',
    // eslint-disable-next-line max-len
    'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 105.0.0.11.118 (iPhone11,8; iOS 12_3_1; en_US; en-US; scale=2.00; 828x1792; 165586599)',
};

const postClientHeaders = {
    // 'user-agent': 'Instagram 155.0.0.37.107',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
};

module.exports = {
    mobileClientHeaders,
    postClientHeaders,
};
