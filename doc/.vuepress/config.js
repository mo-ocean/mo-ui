module.exports = {
  title: 'Hello Mo-Ui',
  description: '一个全新的VUE UI框架',
  base: '/mo-ui/',
  dest: './docs',
  themeConfig: {
    search: true,
    searchMaxSuggestions: 20,
    nav: [{
        text: '主页',
        link: '/'
      },
      {
        text: '指南',
        link: '/guide/'
      },
      {
        text: '谷歌',
        link: 'https://google.com'
      },
    ],
    sidebar: {
      '/guide/': [{
        title: '使用指南',
        collapsable: false,
        children: [
          '',
          'button',

        ]
      }],
    },
  }
}