## Features
Our free Quick Instagram Profile checker allows you to scrape top recent posts from a user's profile page. It can not scrape Instagram comments or other details, because quick-check based on DATACENTER proxies and have very limited access to Instagram. For more advanced usafe please consider [Instagram Scraper](https://apify.com/jaroslavhejlek/instagram-scraper)
 
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

### Scraped Instagram posts
The structure of each item in Instagram posts when scrolling looks like this:

```jsonc
{
  "#debug": {
    "pageType": "user",
    "id": "teslamotors",
    "userId": "297604134",
    "userUsername": "teslamotors",
    "userFullName": "Tesla",
    "limit": 1000000,
    "scrollWaitSecs": 0,
    "shortcode": "B27C4aRBfet",
    "postLocationId": null,
    "postOwnerId": "297604134"
  },
  "queryUsername": "teslamotors",
  "position": 10,
  "type": "Image",
  "shortCode": "B27C4aRBfet",
  "caption": "@hub3rt picked up his Model 3 and brought our London team a cake. \nIf there is a purer thing in this world we would like to hear about it.",
  "hashtags": [],
  "mentions": [
    "hub3rt"
  ],
  "url": "https://www.instagram.com/p/B27C4aRBfet",
  "commentsCount": 926,
  "dimensionsHeight": 1080,
  "dimensionsWidth": 1080,
  "displayUrl": "https://instagram.fyyc3-1.fna.fbcdn.net/v/t51.2885-15/e35/70538312_1124483511275040_7970075346943975868_n.jpg?_nc_ht=instagram.fyyc3-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=UBV8F4hhd_AAX_INMgA&oh=be328b96f1ad3fbb95b54a35b8b0eb79&oe=5F0D6E0E",
  "id": "2142318720331413421",
  "alt": "Photo by Tesla on September 27, 2019. Image may contain: one or more people, people standing and car",
  "likesCount": 181500,
  "timestamp": "2019-09-27T17:11:54.000Z",
  "locationName": null,
  "locationId": null,
  "ownerUsername": "teslamotors",
  "ownerId": "297604134"
}
```

### Scraped Instagram profile
The structure of each user profile looks like this:

```jsonc
{
  "id": "29230178602",
  "username": "apifytech",
  "fullName": "Apify",
  "externalUrl": "https://www.instagram.com/apifytech",
  "followersCount": 187,
  "verified": false,
  "profilePicUrl": "https://scontent.cdninstagram.com/v/t51.2885-19/106623918_555633185104955_8069061714137380269_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=111&_nc_ohc=E9Wc4v1fOKkAX8rlFnr&edm=AGoB3sEBAAAA&ccb=7-4&oh=00_AT9Zjbcr9RTIe7T2XqB_BqGqPKSu7jRBuyN2jXsOGOlgNw&oe=62801491&_nc_sid=21ce66",
  "profilePicUrlHD": "https://scontent.cdninstagram.com/v/t51.2885-19/106623918_555633185104955_8069061714137380269_n.jpg?stp=dst-jpg_s240x240&_nc_ht=scontent.cdninstagram.com&_nc_cat=111&_nc_ohc=E9Wc4v1fOKkAX8rlFnr&edm=AGoB3sEBAAAA&ccb=7-4&oh=00_AT-mkGPXIawNoWcE3fLlSGFgpHG93hSKFGmsHxA205fPGg&oe=62801491&_nc_sid=21ce66",
  "postsCount": 24,
  "latestPosts": [
    {
      "type": "Video",
      "shortCode": "Bw7jACTn3tC",
      "caption": "“We need to take a stand.” Marvel Studios’ #AvengersEndgame is in theaters now. Get tickets: [link in bio]",
      "commentsCount": 1045,
      "dimensionsHeight": 750,
      "dimensionsWidth": 750,
      "displayUrl": "https://scontent-ort2-2.cdninstagram.com/vp/c336cf708e62596cd46879656f86ad70/5CCD112C/t51.2885-15/e35/57649006_653609661751971_8438348841277997450_n.jpg?_nc_ht=scontent-ort2-2.cdninstagram.com",
      "likesCount": 142707,
      "videoViewCount": 482810,
      "timestamp": "2019-05-01T18:44:12.000Z",
      "locationName": null
    },
    // ...
  ]
}
```
