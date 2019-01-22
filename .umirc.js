export default {
  plugins: [
    [
      'umi-plugin-library', {
        doc: {
          title: 'zet',
          repository: "https://github.com/9-web/9web.github.io",
          themeConfig: {
            colors: {
              primary: '#bd4932',
              link: '#bd4932',
            },
            logo: {
              src:
                'http://www.zetyun.com/img/icon/logo.svg',
              width: 200,
            },
          },
        }
      }
    ]
  ],
}
