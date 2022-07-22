// In the future IG GraphQL processing can be moved to library
// For now fragments from https://github.com/gippy/instagram-scraper/blob/master/src/details.js
// except "unhelpful" helpers like "mapNode" - the point is if helper just renamed single operation its a hassle

const dedupArrayByProperty = (prop) => (arr) => {
    const map = new Map();

    for (const item of arr) {
        if (item && prop in item) {
            map.set(item[prop], item);
        }
    }

    return Array.from(map.values());
};

const dedupById = dedupArrayByProperty('id');

const secondsToDate = (value) => {
    // eslint-disable-next-line no-nested-ternary
    return +value ? new Date(value * 1000).toISOString() : (value ? `${value}` : null);
};

const arrayNodes = (arr) => (arr && Array.isArray(arr) ? arr : []).map((x) => x?.node);

const edgesToText = (arr) => {
    return arrayNodes(arr)
        .map(({ text }) => text?.trim())
        .filter(Boolean);
};

const parseCaption = (caption) => {
    let hashtags = [];
    let mentions = [];

    if (caption) {
        // last part means non-spaced tags, like #some#tag#here
        // works with unicode characters. de-duplicates tags and mentions
        const HASHTAG_REGEX = /#([\S]+?)(?=\s|$|[#@])/gums;
        const MENTION_REGEX = /@([\S]+?)(?=\s|$|[#@])/gums;
        const clean = (regex) => [...new Set(([...caption.matchAll(regex)] || []).filter((s) => s[1]).map((s) => s[1].trim()))];
        hashtags = clean(HASHTAG_REGEX);
        mentions = clean(MENTION_REGEX);
    }

    return { hashtags, mentions };
};

const formatDisplayResources = (resources) => {
    return (resources ?? []).map((x) => x?.node).map((x) => x?.display_url).filter(Boolean);
};

const sidecarImages = (node) => formatDisplayResources(node.edge_sidecar_to_children?.edges);

const formatSinglePost = (node) => {
    const comments = {
        count: [
            node.edge_media_to_comment?.count,
            node.edge_media_to_parent_comment?.count,
            node.edge_media_preview_comment?.count,
            node.edge_media_to_hoisted_comment?.count,
        ].reduce((out, count) => (count > out ? count : out), 0), // Math.max won't work here
        edges: dedupById([
            node.edge_media_to_comment?.edges,
            node.edge_media_to_parent_comment?.edges,
            node.edge_media_preview_comment?.edges,
            node.edge_media_to_hoisted_comment?.edges,
        ].flat().map((x) => x?.node)),
    };
    const likes = node.edge_liked_by || node.edge_media_preview_like;
    const caption = edgesToText(node.edge_media_to_caption?.edges).join('\n');
    const { hashtags, mentions } = parseCaption(caption);

    return {
        id: node.id,
        // eslint-disable-next-line no-nested-ternary, no-underscore-dangle
        type: node?.__typename ? node.__typename.replace('Graph', '') : (node.is_video ? 'Video' : 'Image'),
        shortCode: node.shortcode,
        caption,
        hashtags,
        mentions,
        url: node.shortcode ? `https://www.instagram.com/p/${node.shortcode}/` : null,
        commentsCount: comments.count || comments.edges.length || 0,
        // firstComment: comments?.edges?.[0]?.text ?? '',
        topComments: comments?.edges,
        dimensionsHeight: node?.dimensions?.height,
        dimensionsWidth: node?.dimensions?.width,
        displayUrl: node.display_url,
        images: sidecarImages(node),
        videoUrl: node.video_url,
        alt: node.accessibility_caption,
        likesCount: likes?.count ?? null,
        videoViewCount: node.video_view_count,
        timestamp: secondsToDate(node.taken_at_timestamp),
        childPosts: node.edge_sidecar_to_children?.edges?.map?.((child) => formatSinglePost(child.node)) ?? [],
        locationName: node.location?.name ?? null,
        locationId: node.location?.id ?? null,
        ownerFullName: node?.owner?.full_name ?? null,
        ownerUsername: node?.owner?.username ?? null,
        ownerId: node?.owner?.id ?? null,
        productType: node.product_type,
        isSponsored: node.is_ad,
        videoDuration: node.video_duration,
    };
};

/**
 * Formats IGTV Video Post edge item into nicely formated output item
 *
 * @param {Record<string, any>} edge
 */
const formatIGTVVideo = (edge) => {
    const { node } = edge;

    return {
        type: 'Video',
        shortCode: node.shortcode,
        title: node.title,
        caption: edgesToText(node.edge_media_to_caption?.edges).join('\n') || '',
        commentsCount: node.edge_media_to_comment?.count,
        commentsDisabled: node.comments_disabled,
        dimensionsHeight: node.dimensions.height,
        dimensionsWidth: node.dimensions.width,
        displayUrl: node.display_url,
        likesCount: node.edge_liked_by ? node.edge_liked_by.count : null,
        videoDuration: node.video_duration || 0,
        videoViewCount: node.video_view_count,
        videoPlayCount: node.video_play_count,
    };
};

const mapAPIPostData = (node) => {
    return {
        id: node.id,
        // type: node?.__typename ? node.__typename.replace('Graph', '') : (node.is_video ? 'Video' : 'Image'),
        type: node.product_type,
        shortCode: node.code,
        caption: node.caption?.text,
        // hashtags: [],
        // mentions: [],
        url: node.code ? `https://www.instagram.com/p/${node.code}/` : undefined,
        commentsCount: node.comment_count,
        // firstComment: comments?.edges?.[0]?.text ?? '',
        // topComments: [],
        dimensionsHeight: node.original_height,
        dimensionsWidth: node.original_width,
        displayUrl: node.display_url,
        images: node?.image_versions2?.candidates?.map((x) => x?.url).filter(Boolean),
        videoUrl: node?.video_versions?.[0]?.url,
        // alt: node.accessibility_caption,
        likesCount: node.like_count,
        videoViewCount: node.view_count,
        timestamp: secondsToDate(node.taken_at) || undefined,
        childPosts: node?.carousel_media?.map?.((child) => mapAPIPostData(child)) ?? undefined,
        locationName: node.location?.name ?? undefined,
        locationId: node.location?.pk ?? undefined,
        ownerFullName: node?.user?.full_name ?? undefined,
        ownerUsername: node?.user?.username ?? undefined,
        ownerId: node?.user?.pk ?? undefined,
        productType: node.product_type,
        isSponsored: node.commerciality_status !== 'not_commercial',
        videoDuration: node.video_duration,
        pk: node.pk,
    };
};

module.exports = {
    formatSinglePost,
    formatIGTVVideo,
    mapAPIPostData,
};
