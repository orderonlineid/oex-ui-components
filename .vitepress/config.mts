import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "OExpress UI Components",
  description: "A UI Documentation for OExpress",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/examples/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'Components',
        items: [
          { text: 'Button', link: '/components/button' },
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
