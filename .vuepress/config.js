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
      ['link', { rel: "shortcut icon", href: "https://swedani.netlify.com/favicon.ico" }],
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
    disqus: "swedani",
    googleAnalytics: "UA-156994869-1",
    sitemap: true,
    hostname: "https://swedani.netlify.com/",
    socialShare: true,
    socialShareNetworks: ["twitter", "facebook"],
    footer: {

      // change your acc
      contact: [
        {
          type: "github",
          link: "https://github.com/ahmad-swedani"
        },
        {
          type: "instagram",
          link: "https://www.instagram.com/ahmad.swedani/"
        },
        {
          type: "facebook",
          link: "https://web.facebook.com/ahmadswedani2020"
        },
         {
          type: "linkedin",
          link: "https://www.linkedin.com/in/ahmadswedani/"
        },
        
        {
          type: "twitter",
          link: "https://twitter.com/ahmad_swedani_"
        }
        // {
        //   type: "youtube",
        //   link: "https://www.youtube.com/channel/UC8fZybVYhEnCe1UwwVidVcg"
        // },
        
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
