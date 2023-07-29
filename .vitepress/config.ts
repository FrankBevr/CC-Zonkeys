import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CC Zonkeys",
  description: "A Minimal Setup for CC Zonkeys",
  themeConfig: {
    siteTitle: "CC - Zonkeys",
    logo: { light: "/donkey-icon.svg", dark: "/donkey-icon-dark.svg" },
    nav: [
      { text: "Home", link: "/" },
      { text: "Protocol", link: "/Protocol-27-07-23.md" },
    ],

    sidebar: [
      {
        text: "Overview",
        items: [
          { text: "Protocol", link: "/Protocol-27-07-23.md" },
          { text: "Markdown Examples", link: "/markdown-examples.md" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/frankbevr/CC-Zonkeys" },
    ],
    head: [
      [
        "link",
        { rel: "icon", type: "image/svg+xml", href: "/donkey-icon.svg" },
      ],
    ],
  },
});
