const { formatSinglePost } = require('./graphql-lib');

const extractProfile = (apiDataObject) => {
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

module.exports = { extractProfile };
