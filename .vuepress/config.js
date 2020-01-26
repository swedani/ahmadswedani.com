module.exports = {
  title: "Ahmad Swedani",
  description: "Full Stack Software Engineer",
  theme: "modern-blog",
  themeConfig: {
    head: [
      ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" }],
      ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" }],
      ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" }],
      ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" }],
      ['link', { rel: "manifest", href: "/site.webmanifest" }],
      ['link', { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" }],
      ['link', { rel: "shortcut icon", href: "https://ahmadmostafa.com/favicon.ico" }],
      ['meta', { name: "msapplication-TileColor", content: "#da532c" }],
      ['meta', { name: "theme-color", content: "#ffffff" }],
    ],
    summary: true,
    summaryLength: 300,
    heroImage: "/images/hero.jpeg",
    nav: [
      {
        text: "Home",
        link: "/",
        icon: 'el-icon-house'
      },
      // {
      //  text: "Projects",
      //link: "/projects/",
      //  icon: "el-icon-folder"
      // }
    ],
    about: {
      fullName: "Ahmad Swedani",
      image: "/images/bg.png",
      bio:
        "Full stack software engineer"
    },
   //disqus: "ahmadmostafa",
    googleAnalytics: "UA-144752623-2",
    sitemap: true,
    hostname: "https://ahmadmostafa.com/",
    socialShare: true,
    socialShareNetworks: ["twitter", "facebook"],
    footer: {
     
     // change your acc
      contact: [
        {
          type: "github",
          link: "https://github.com/swedani/"
        },
        {
          type: "instagram",
          link: "https://instagram.com/dr.ahmad_swedan/"
        },
        {
          type: "facebook",
          link: "https://www.facebook.com/ahmad.kasim.7355"
        },
        /* {
          type: "linkedin",
          link: "https://www.linkedin.com/in/z3by/"
        },
        
        {
          type: "youtube",
          link: "https://www.youtube.com/channel/UC8fZybVYhEnCe1UwwVidVcg"
        },
        {
          type: "twitter",
          link: "https://twitter.com/ahmad_mostafa10/"
        }
        */
      ],
      copyright: [
        {
          text: "This theme is available for you!",
          link: "https://github.com/z3by/vuepress-theme-modern-blog"
        },
        {
          text: `MIT Licensed Copyright © ${new Date().getFullYear()}-present`,
          link:
            "https://github.com/z3by/vuepress-theme-modern-blog/blob/master/LICENSE"
        }
      ]
    }
  }
};
