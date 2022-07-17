const { formatSinglePost, formatIGTVVideo } = require('./graphql-lib');

const extractProfile = (data) => {
    const result = {
        id: data.id,
        username: data.username,
        fullName: data.full_name,
        biography: data.biography,
        externalUrl: data.external_url,
        externalUrlShimmed: data.external_url_linkshimmed,
        followersCount: data.edge_followed_by.count,
        followsCount: data.edge_follow.count,
        hasChannel: data.has_channel,
        highlightReelCount: data.highlight_reel_count,
        isBusinessAccount: data.is_business_account,
        joinedRecently: data.is_joined_recently,
        businessCategoryName: data.business_category_name,
        private: data.is_private,
        verified: data.is_verified,
        profilePicUrl: data.profile_pic_url,
        profilePicUrlHD: data.profile_pic_url_hd,
        facebookPage: data.connected_fb_page,
        igtvVideoCount: data.edge_felix_video_timeline.count,
        relatedProfiles: data.edge_related_profiles?.edges?.map((x) => x?.node),
        latestIgtvVideos: data.edge_felix_video_timeline ? data.edge_felix_video_timeline.edges.map(formatIGTVVideo) : [],
        postsCount: data.edge_owner_to_timeline_media.count,
        latestPosts: data.edge_owner_to_timeline_media ? data.edge_owner_to_timeline_media.edges.map((edge) => edge.node).map(formatSinglePost) : [],
        // following,
        // followedBy,
        // taggedPosts,
        hasPublicStory: data.has_public_story,
    };

    return result;
};

module.exports = { extractProfile };
