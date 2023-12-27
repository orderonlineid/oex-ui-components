import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "OExpress UI Components",
  description: "A UI Documentation for OExpress",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local',
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/components/button' },
      { text: 'How to contribute?', link: '/getting-started/installation' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/getting-started/introduction' },
          { text: 'Installation', link: '/getting-started/installation' },
          { text: 'Markdown Template', link: '/getting-started/_markdown-template' },
        ]
      },
      {
        text: 'Components',
        items: [
          { text: 'Alert', link: '/components/alert' },
          { text: 'Button', link: '/components/button' },
          { text: 'Input', link: '/components/input' },
          { text: 'Input Group', link: '/components/inputGroup' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/orderonlineid/oex-ui-components' },
    ],

    footer: {
      // message: 'Released under the MIT License.',
      copyright: '© 2024 oexpress.id'
    }
  }
})
