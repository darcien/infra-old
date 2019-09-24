const config = {
  gatsby: {
    pathPrefix: '/infra',
    siteUrl: 'https://kodefox.github.io',
    gaTrackingId: null,
  },
  header: {
    logo: 'https://kodefox.com/images/favicon.ico',
    logoLink: 'https://kodefox.github.io/infra',
    title: 'Infra Documentation',
    githubUrl: 'https://github.com/kodefox/infra',
    helpUrl: '',
    tweetText: '',
    links: [{text: '', link: ''}],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: ['/introduction', '/codeblock'],
    links: [{text: 'KodeFox', link: 'https://kodefox.com'}],
    frontline: false,
    ignoreIndex: true,
  },
  siteMetadata: {
    title: 'Infra Documentation | KodeFox',
    description: 'Documentation for packages released under KodeFox infra team',
    ogImage: null,
    docsLocation: 'https://github.com/kodefox/infra/tree/master/docs/content',
    favicon: 'https://kodefox.com/images/favicon.ico',
  },
};

module.exports = config;
