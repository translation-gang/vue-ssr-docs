module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Vue SSR Guide',
      description: 'Vue.js Server-Side Rendering Guide'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'Vue SSR 指南',
      description: 'Vue.js 服务端渲染指南'
    },
    '/ru/': {
      lang: 'ru',
      title: 'Руководство Vue SSR',
      description: 'Руководство по серверному рендерингу Vue.js'
    }
  },
  serviceWorker: true,
  theme: 'vue',
  themeConfig: {
    repo: 'vuejs/vue-ssr-docs',
    docsDir: 'docs',
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        nav: [
          {
            text: 'Guide',
            link: '/guide/'
          },
          {
            text: 'API Reference',
            link: '/api/'
          }
        ],
        sidebar: [
          ['/', 'Introduction'],
          '/guide/',
          '/guide/universal',
          '/guide/structure',
          '/guide/routing',
          '/guide/data',
          '/guide/hydration',
          '/guide/bundle-renderer',
          '/guide/build-config',
          '/guide/css',
          '/guide/head',
          '/guide/caching',
          '/guide/streaming',
          '/guide/non-node'
        ]
      },
      '/zh/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        nav: [
          {
            text: '指南',
            link: '/zh/guide/'
          },
          {
            text: 'API 参考',
            link: '/zh/api/'
          }
        ],
        sidebar: [
          ['/zh/', '介绍'],
          '/zh/guide/',
          '/zh/guide/universal',
          '/zh/guide/structure',
          '/zh/guide/routing',
          '/zh/guide/data',
          '/zh/guide/hydration',
          '/zh/guide/bundle-renderer',
          '/zh/guide/build-config',
          '/zh/guide/css',
          '/zh/guide/head',
          '/zh/guide/caching',
          '/zh/guide/streaming',
          '/zh/guide/non-node'
        ]
      },
      '/ru/': {
        label: 'Русский',
        selectText: 'Languages',
        editLinkText: 'Изменить эту страницу на GitHub',
        nav: [
          {
            text: 'Руководство',
            link: '/ru/guide/'
          },
          {
            text: 'Справочник API',
            link: '/ru/api/'
          }
        ],
        sidebar: [
          ['/ru/', 'Введение'],
          '/ru/guide/',
          '/ru/guide/universal',
          '/ru/guide/structure',
          '/ru/guide/routing',
          '/ru/guide/data',
          '/ru/guide/hydration',
          '/ru/guide/bundle-renderer',
          '/ru/guide/build-config',
          '/ru/guide/css',
          '/ru/guide/head',
          '/ru/guide/caching',
          '/ru/guide/streaming',
          '/ru/guide/non-node'
        ]
      }
    }
  }
}
