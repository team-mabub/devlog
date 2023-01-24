// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Eighthing Devlog',
  tagline: '8명의 멋진 괴짜들의 개발기록😎',
  url: 'https://eighthing.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'eighthing', // Usually your GitHub org/user name.
  projectName: 'eighthing.github.io', // Usually your repo name.
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  headTags: [
    {
      tagName: 'meta',
      attributes: {
        'http-equiv': 'cache-control',
        'content': 'no-cache',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        'http-equiv': 'expires',
        'content': '0',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        'http-equiv': 'pragma',
        'content': 'no-cache',
      }
    }
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'wiki',
          routeBasePath: 'wiki',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          blogTitle: 'Eighthing Blog',
          blogDescription: '우리들의 일상 이야기☀️',
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All posts',
          postsPerPage: 5,
          showReadingTime: true,
          feedOptions: {
            type: 'all',
            title: 'Eighthing Changelog',
            description: 'Eighthing up-to-date posts',
            copyright: `Copyright © ${new Date().getFullYear()} Eighthing`,
            language: 'ko',
          }
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Eighthing',
        logo: {
          alt: 'Eighthing Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '📚 Wiki',
          },
          {to: '/blog', label: '📝 Blog', position: 'left'},
          {
            href: 'https://github.com/eighthing',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Eighthing`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
