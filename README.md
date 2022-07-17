## Features
Our Quick Instagram Profile checker allows you to scrape top recent posts and videos from a user's profile page along with profile details without login or special proxy. For more advanced usage please consider [Instagram Scraper](https://apify.com/jaroslavhejlek/instagram-scraper)
 
Or let us know if you need a [custom Instagram scraping solution](https://apify.com/custom-solutions).

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
  ]
}
```
