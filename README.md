# Nebula 🔮
An Astro template for your iOS apps.

![Preview](https://user-images.githubusercontent.com/95885060/223279994-a40acbb8-62f9-43ec-ab2b-1f80705c23d9.png)

# Score
![Lighthouse](https://user-images.githubusercontent.com/95885060/223279863-18a3421f-a471-4e76-a4fa-6516abbb24c8.png)

# Deploy
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/zavbala/nebula)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/zavbala/nebula)

# Config
To customize this template with your stuff go to `app.json` and define your own.  

```JSON
{
  "ads": false,
  "free": true,
  "name": "App",
  "theme": "", // default indigo
  "contact": "contact@app.app",
  "stores": {
    "apple": "https://apps.apple.com/us/app/app/id1234567890",
    "google": "https://play.google.com/store/apps/details?id=com.app.app"
  },
  "description": [ "1st", "2nd", "3rd"],
  "features": [
    {
      "title": "Title",
      "body": "Content"
    },
    ...
  ],
  "social": {
    "twitter": "https://twitter.com/app",
    "youtube": "https://www.youtube.com/app",
    "discord": "https://discord.gg/app"
  }
}


```
