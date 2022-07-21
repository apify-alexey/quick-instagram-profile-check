## Features
Our Quick Instagram Profile checker allows you to scrape top recent posts and videos from a user's profile page along with profile details without login or special proxy.

Beta: If you want to get profile feed you need to specify max results and for this results you will need RESIDENTIAL proxies. In current beta version feed results added as `postsFeed` in a different format, due compatibility reasons its not the the same data format as `latestPosts`.
 
## Why scrape Instagram?
Since this actor is very savvy on resources you can run it as often as you want to be able to collect all new posts or track stats over time in a same style as provided by i.e. SocialBlade.
If you need more details or functionality like search you need to have access to residential proxies and use full [Instagram Scraper](https://apify.com/jaroslavhejlek/instagram-scraper)

If you want more ideas, check out our [industries pages](https://apify.com/industries) for ways web scraping is already being used in a wide range of companies.

## Is it legal to scrape Instagram?
Our Instagram scrapers are ethical and do not extract any private user data, such as email addresses, gender, or location. They only extract what the user has chosen to share publicly. We therefore believe that our scrapers, when used for ethical purposes by Apify users, are safe. However, you should be aware that your results could contain personal data. Personal data is protected by the [GDPR](https://en.wikipedia.org/wiki/General_Data_Protection_Regulation) in the European Union and by other regulations around the world. You should not scrape personal data unless you have a legitimate reason to do so. If you're unsure whether your reason is legitimate, consult your lawyers. You can also read our blog post on the [legality of web scraping](https://blog.apify.com/is-web-scraping-legal/).

## Cost of usage
- [Compute units](https://apify.com/pricing/actors) - 0.05CU per 100 profiles or less

### Using proxies
Datacenter proxies work with no or few retries.

## Input parameters
The input of this scraper should be JSON containing the list of pages on Instagram that should be visited. Required fields are:

| Field | Type | Description |
| ----- | ---- | ----------- |
| directUrls | Array | List of Instagram URLs (profile or hashtag or place) |
| proxy | Object | (optional) Proxy configuration |

### Instagram scraper input example

```jsonc
{
  "directUrls": [
    "https://www.instagram.com/apifytech"
  ]
}
```

## Instagram output format
The actor stores its results in a dataset. Each item is a separate item in the dataset.

You can manage the results in any language (Python, PHP, Node JS/NPM). See [our API reference](https://docs.apify.com/api/v2) to learn more about getting results from the Instagram Scraper.

### Scraped Instagram profile
The structure of each user profile looks like this:

```jsonc
{
  "id": "29230178602",
  "username": "apifytech",
  "fullName": "Apify",
  "biography": "Official account of the Apify team. We’re on a mission to make the web more programmable and more fun.",
  "externalUrl": "https://www.instagram.com/apifytech",
  "externalUrlShimmed": "https://l.instagram.com/?u=https%3A%2F%2Fapify.it%2F36qNFkD&e=ATOlHlxCceIL4t5zzYn4W60bXT0r7NNU_hMxZppxXqyRoVhP77v2vZZh72nTBN16Ab_FsXgYzL4_BIXP&s=1",
  "followersCount": 190,
  "followsCount": 16,
  "hasChannel": false,
  "highlightReelCount": 6,
  "isBusinessAccount": true,
  "joinedRecently": false,
  "businessCategoryName": "Personal Goods & General Merchandise Stores",
  "private": false,
  "verified": false,
  "profilePicUrl": "https://scontent-den4-1.cdninstagram.com/v/t51.2885-19/106623918_555633185104955_8069061714137380269_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-den4-1.cdninstagram.com&_nc_cat=111&_nc_ohc=rsknq1RVRDYAX9MeRkm&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AT-RKF9hO4xxbmyvN2ptpIyK2JJvuALeFVsy2GYIt7d__g&oe=62DB0C11&_nc_sid=8fd12b",
  "profilePicUrlHD": "https://scontent-den4-1.cdninstagram.com/v/t51.2885-19/106623918_555633185104955_8069061714137380269_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-den4-1.cdninstagram.com&_nc_cat=111&_nc_ohc=rsknq1RVRDYAX9MeRkm&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AT8wNcwp__8qTymqhVm6uTyz_UJ2-H1X9ULsE6LEqchCJw&oe=62DB0C11&_nc_sid=8fd12b",
  "facebookPage": null,
  "igtvVideoCount": 1,
  "relatedProfiles": [],
  "latestIgtvVideos": [
    {
      "type": "Video",
      "shortCode": "CVdF6ztgMX1",
      "title": "",
      "caption": "After the superfun offsite in Croatia, it's good to remind ourselves that we actually work here 😁 So let's rewatch the intro video together ▶️ We mean every word of what we say in it, so it's your call now: would you work with us? Don't hesitate to send in your applications - we can't wait to read them 😉",
      "commentsCount": 0,
      "commentsDisabled": false,
      "dimensionsHeight": 607,
      "dimensionsWidth": 1080,
      "displayUrl": "https://scontent-den4-1.cdninstagram.com/v/t51.2885-15/248313208_5056389781056509_753703490695178596_n.jpg?stp=dst-jpg_e15_fr_s1080x1080&_nc_ht=scontent-den4-1.cdninstagram.com&_nc_cat=105&_nc_ohc=SyVDrEa8ZcsAX9zD8Wh&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AT-iC3AOk4HgFrNKVfObodaldSR2-POQqKLPr19xqe8oqA&oe=62D5B78B&_nc_sid=8fd12b",
      "likesCount": 12,
      "videoDuration": 146.048,
      "videoViewCount": 137
    }
  ],
  "postsCount": 30,
  "latestPosts": [
    {
      "id": "2860327491559594186",
      "type": "Image",
      "shortCode": "Cex7LLrsZjK",
      "caption": "Our evening with @czechitas was delightful! We loved having these talented and driven women over, sharing their stories, and we look forward to witnessing their success in the IT industry!\n\n#womenintech #womeninstem #womeninit",
      "hashtags": [
        "womenintech",
        "womeninstem",
        "womeninit"
      ],
      "mentions": [
        "czechitas"
      ],
      "url": "https://www.instagram.com/p/Cex7LLrsZjK/",
      "commentsCount": 3,
      "dimensionsHeight": 894,
      "dimensionsWidth": 1080,
      "displayUrl": "https://scontent-den4-1.cdninstagram.com/v/t51.2885-15/287969419_1468075766976677_7843009915275258936_n.jpg?stp=dst-jpg_e35_s1080x1080&_nc_ht=scontent-den4-1.cdninstagram.com&_nc_cat=105&_nc_ohc=yTSM5EFEZN4AX_qkiiV&edm=AOQ1c0wBAAAA&ccb=7-5&ig_cache_key=Mjg2MDMyNzQ5MTU1OTU5NDE4Ng%3D%3D.2-ccb7-5&oh=00_AT9Je8hSKIS_9siHS_jMRJqxUBN-x767dyJKFbah91AGXQ&oe=62DA9D63&_nc_sid=8fd12b",
      "images": [],
      "alt": null,
      "likesCount": 13,
      "timestamp": "2022-06-14T09:07:09.000Z",
      "childPosts": [],
      "locationName": "Prague, Czech Republic",
      "locationId": "110589025635590",
      "ownerFullName": null,
      "ownerUsername": "apifytech",
      "ownerId": "29230178602"
    }
  ],
  "postsFeed": []
}
```

Posts per profile crawled separately if you specified value over 0 in input. Current format as below:
```
"postsFeed": [
    {
      "taken_at": 1656614386,
      "pk": 2872211115822249500,
      "id": "2872211115822249544_2922205488",
      "device_timestamp": 1656614257700806,
      "media_type": 2,
      "code": "CfcJMrOg3ZI",
      "client_cache_key": "Mjg3MjIxMTExNTgyMjI0OTU0NA==.2",
      "filter_type": 0,
      "is_unified_video": false,
      "should_request_ads": false,
      "caption_is_edited": false,
      "like_and_view_counts_disabled": false,
      "commerciality_status": "not_commercial",
      "is_paid_partnership": false,
      "is_visual_reply_commenter_notice_enabled": true,
      "has_delayed_metadata": false,
      "comment_likes_enabled": false,
      "comment_threading_enabled": true,
      "has_more_comments": false,
      "max_num_visible_preview_comments": 2,
      "preview_comments": [],
      "can_view_more_preview_comments": false,
      "comment_count": 0,
      "hide_view_all_comment_entrypoint": false,
      "inline_composer_display_condition": "impression_trigger",
      "inline_composer_imp_trigger_time": 5,
      "image_versions2": {
        "candidates": [
          {
            "width": 828,
            "height": 1472,
            "url": "https://scontent-sin6-2.cdninstagram.com/v/t51.2885-15/291320780_425873439437085_5005758607224238606_n.jpg?stp=dst-jpg_e35_p828x828_sh0.08&_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=109&_nc_ohc=ogxjrdkUFwUAX_KB0b9&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=Mjg3MjIxMTExNTgyMjI0OTU0NA%3D%3D.2-ccb7-5&oh=00_AT8xBq41sEzvR9Rlurm5bl_MbqiwFEykt_WH76qNC8Wmnw&oe=62E078A2&_nc_sid=6136e7",
            "scans_profile": "e15"
          },
          {
            "width": 320,
            "height": 569,
            "url": "https://scontent-sin6-2.cdninstagram.com/v/t51.2885-15/291320780_425873439437085_5005758607224238606_n.jpg?stp=dst-jpg_e15_p320x320&_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=109&_nc_ohc=ogxjrdkUFwUAX_KB0b9&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=Mjg3MjIxMTExNTgyMjI0OTU0NA%3D%3D.2-ccb7-5&oh=00_AT_UYGLzlna0NEIhhZyNR9xX_Kl62Lap98zL6fRw0T8qgA&oe=62E078A2&_nc_sid=6136e7",
            "scans_profile": "e15"
          }
        ],
        "additional_candidates": {
          "igtv_first_frame": {
            "width": 640,
            "height": 1136,
            "url": "https://instagram.fsub8-1.fna.fbcdn.net/v/t51.2885-15/290619866_526727729150526_4260374664516033736_n.jpg?stp=dst-jpg_e15&_nc_ht=instagram.fsub8-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=PPURAsWWxj8AX9KjJOe&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=acf.Mjg3MjIxMTExNTgyMjI0OTU0NA%3D%3D.2-ccb7-5&oh=00_AT--ysvTRtUJEuaQAJ80PdJfI3p39HS7dSKsPhO5xpus-Q&oe=62DF44EF&_nc_sid=6136e7",
            "scans_profile": "e15"
          },
          "first_frame": {
            "width": 640,
            "height": 1136,
            "url": "https://instagram.fsub8-1.fna.fbcdn.net/v/t51.2885-15/290619866_526727729150526_4260374664516033736_n.jpg?stp=dst-jpg_e15&_nc_ht=instagram.fsub8-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=PPURAsWWxj8AX9KjJOe&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=acf.Mjg3MjIxMTExNTgyMjI0OTU0NA%3D%3D.2-ccb7-5&oh=00_AT--ysvTRtUJEuaQAJ80PdJfI3p39HS7dSKsPhO5xpus-Q&oe=62DF44EF&_nc_sid=6136e7",
            "scans_profile": "e15"
          }
        },
        "animated_thumbnail_spritesheet_info_candidates": {
          "default": {
            "video_length": 60.04,
            "thumbnail_width": 360,
            "thumbnail_height": 640,
            "thumbnail_duration": 0.06666666666666667,
            "sprite_urls": [
              "https://scontent-sin6-1.cdninstagram.com/v/t51.2885-15/290969145_434518218310043_7588574871108315492_n.jpg?_nc_ht=scontent-sin6-1.cdninstagram.com&_nc_cat=111&_nc_ohc=nqnu_bR44G0AX-18W1Q&edm=ABmJApABAAAA&ccb=7-5&oh=00_AT-npaqME7X9fF6rePzm77C3AQOJ-6hJXFPEte3hhmNCTw&oe=62DB2658&_nc_sid=6136e7"
            ],
            "thumbnails_per_row": 6,
            "total_thumbnail_num_per_sprite": 18,
            "max_thumbnails_per_sprite": 18,
            "sprite_width": 2160,
            "sprite_height": 1920,
            "rendered_width": 96,
            "file_size_kb": 35
          }
        }
      },
      "original_width": 1080,
      "original_height": 1920,
      "user": {
        "pk": 2922205488,
        "username": "czechitas",
        "full_name": "Czechitas",
        "is_private": false,
        "profile_pic_url": "https://instagram.fsub8-1.fna.fbcdn.net/v/t51.2885-19/275750687_645835213144315_6543098904177155996_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fsub8-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=8Yq1l1SxK5QAX8lFvxM&edm=ABmJApABAAAA&ccb=7-5&oh=00_AT81INGLlCBTMIHyw_95r7ZacesJA_I-oI8ezep1ZdI0yQ&oe=62E0EF9A&_nc_sid=6136e7",
        "profile_pic_id": "2793758077188335776_2922205488",
        "is_verified": false,
        "has_anonymous_profile_picture": false,
        "is_unpublished": false,
        "has_highlight_reels": false,
        "account_badges": [],
        "fan_club_info": {
          "fan_club_id": null,
          "fan_club_name": null
        }
      },
      "can_viewer_reshare": true,
      "like_count": 51,
      "has_liked": false,
      "top_likers": [],
      "facepile_top_likers": [],
      "photo_of_you": false,
      "is_organic_product_tagging_eligible": false,
      "can_see_insights_as_brand": false,
      "video_versions": [
        {
          "type": 101,
          "width": 480,
          "height": 853,
          "url": "https://scontent-sin6-3.cdninstagram.com/v/t50.2886-16/10000000_726535818567418_7849650183103372514_n.mp4?_nc_ht=scontent-sin6-3.cdninstagram.com&_nc_cat=110&_nc_ohc=fDqfEhGCP1cAX_jo1eN&edm=ABmJApABAAAA&ccb=7-5&oe=62DB6670&oh=00_AT_gjGD1RTSO0_THB03INU83RO4ZOXFr1o7kSbRu9qVgOw&_nc_sid=6136e7",
          "id": "518485093387808"
        },
        {
          "type": 103,
          "width": 480,
          "height": 853,
          "url": "https://scontent-sin6-3.cdninstagram.com/v/t50.2886-16/10000000_726535818567418_7849650183103372514_n.mp4?_nc_ht=scontent-sin6-3.cdninstagram.com&_nc_cat=110&_nc_ohc=fDqfEhGCP1cAX_jo1eN&edm=ABmJApABAAAA&ccb=7-5&oe=62DB6670&oh=00_AT_gjGD1RTSO0_THB03INU83RO4ZOXFr1o7kSbRu9qVgOw&_nc_sid=6136e7",
          "id": "518485093387808"
        },
        {
          "type": 102,
          "width": 480,
          "height": 853,
          "url": "https://scontent-sin6-3.cdninstagram.com/v/t50.2886-16/10000000_726535818567418_7849650183103372514_n.mp4?_nc_ht=scontent-sin6-3.cdninstagram.com&_nc_cat=110&_nc_ohc=fDqfEhGCP1cAX_jo1eN&edm=ABmJApABAAAA&ccb=7-5&oe=62DB6670&oh=00_AT_gjGD1RTSO0_THB03INU83RO4ZOXFr1o7kSbRu9qVgOw&_nc_sid=6136e7",
          "id": "518485093387808"
        }
      ],
      "has_audio": true,
      "video_duration": 60.071,
      "view_count": 730,
      "play_count": 1769,
      "caption": {
        "pk": 17951613145943944,
        "user_id": 2922205488,
        "text": "Radost. Úleva. Smutek. Spokojenost. Klid. Přátelství. ✨Směs pocitů a emocí, které přináší závěrečný Galavečer Digitální akademie snad každému: lektorům, koučům, mentorům, koordinátorkám a především účastnicím jednotlivých běhů, které se vydávají na cestu do IT.👩🏽‍💻",
        "type": 1,
        "created_at": 1656614388,
        "created_at_utc": 1656614388,
        "content_type": "comment",
        "status": "Active",
        "bit_flags": 0,
        "did_report_as_spam": false,
        "share_enabled": false,
        "user": {
          "pk": 2922205488,
          "username": "czechitas",
          "full_name": "Czechitas",
          "is_private": false,
          "profile_pic_url": "https://instagram.fsub8-1.fna.fbcdn.net/v/t51.2885-19/275750687_645835213144315_6543098904177155996_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fsub8-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=8Yq1l1SxK5QAX8lFvxM&edm=ABmJApABAAAA&ccb=7-5&oh=00_AT81INGLlCBTMIHyw_95r7ZacesJA_I-oI8ezep1ZdI0yQ&oe=62E0EF9A&_nc_sid=6136e7",
          "profile_pic_id": "2793758077188335776_2922205488",
          "is_verified": false
        },
        "is_covered": false,
        "media_id": 2872211115822249500,
        "private_reply_status": 0
      },
      "comment_inform_treatment": {
        "should_have_inform_treatment": false,
        "text": "",
        "url": null,
        "action_type": null
      },
      "sharing_friction_info": {
        "should_have_sharing_friction": false,
        "bloks_app_url": null,
        "sharing_friction_payload": null
      },
      "can_viewer_save": true,
      "is_in_profile_grid": false,
      "profile_grid_control_enabled": false,
      "organic_tracking_token": "eyJ2ZXJzaW9uIjo1LCJwYXlsb2FkIjp7ImlzX2FuYWx5dGljc190cmFja2VkIjp0cnVlLCJ1dWlkIjoiNGJmYzRhOTJkMTZiNGVhY2I0MjJjMjg2OTkwZGRmNTMyODcyMjExMTE1ODIyMjQ5NTQ0In0sInNpZ25hdHVyZSI6IiJ9",
      "has_shared_to_fb": 0,
      "product_type": "clips",
      "deleted_reason": 0,
      "integrity_review_decision": "pending",
      "music_metadata": null,
      "clips_metadata": {
        "music_info": null,
        "original_sound_info": null,
        "audio_type": null,
        "music_canonical_id": "",
        "featured_label": null,
        "mashup_info": {
          "mashups_allowed": false,
          "can_toggle_mashups_allowed": false,
          "has_been_mashed_up": false,
          "formatted_mashups_count": null,
          "original_media": null,
          "non_privacy_filtered_mashups_media_count": null,
          "mashup_type": null,
          "is_creator_requesting_mashup": false
        },
        "nux_info": null,
        "viewer_interaction_settings": null,
        "branded_content_tag_info": {
          "can_add_tag": false
        },
        "shopping_info": null,
        "additional_audio_info": null,
        "is_shared_to_fb": false,
        "breaking_content_info": null,
        "challenge_info": null,
        "reels_on_the_rise_info": null,
        "breaking_creator_info": null,
        "asset_recommendation_info": null,
        "contextual_highlight_info": null,
        "clips_creation_entry_point": "clips",
        "audio_ranking_info": null,
        "template_info": null,
        "is_fan_club_promo_video": null,
        "disable_use_in_clips_client_cache": false
      }
    }
]
```