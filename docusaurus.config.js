// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "I'm Aaron.",
  tagline: "a programmer.",
  url: "https://aaronchen0506.github.io/",
  baseUrl: "/me",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "https://aaronchen0506.github.io/me/images/favicon.ico",
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "aaron", // Usually your GitHub org/user name.
  projectName: "aaron-chen-profile", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: "Aaron Chen",
        logo: {
          alt: "Aaron Chen",
          src: "https://aaronchen0506.github.io/me/images/favicon.ico",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "My Details",
          },
          {
            href: "https://aaronchen0506.github.io/me/",
            label: "Home",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Hobbies and Strengths",
            items: [
              {
                label: "Maths",
                to: "/docs/common-tasks/maths",
              },
              {
                label: "Reading",
                to: "/docs/common-tasks/reading",
              },
              {
                label: "Programming",
                to: "/docs/common-tasks/programming",
              },
            ],
          },
          {
            title: "Rewards/Certificates",
            items: [
              {
                label: "Maths Olympiad",
                href: "/docs/templates/base-template#maths-olympiad",
              },
              {
                label: "Music (Piano)",
                href: "/docs/templates/base-template#practice-of-music-grade-5",
              },
              {
                label: "Eenglish Victorian High Ability Program",
                href: "/docs/templates/base-template#english-victorian-high-ability-program",
              },
            ],
          },
          {
            title: "Email",
            items: [
              {
                label: "achenl2010@gmail.com",
                href: "https://aaronchen0506.github.io/me/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Built by Aaron Chen.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
