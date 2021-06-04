/* eslint-disable @typescript-eslint/camelcase */
module.exports = {
  siteMetadata: {
    title: 'SAS Apps - Unleash Your Analytics',
    description:
      "Custom Interfaces to the world's most powerful Analytics Platform",
    siteUrl: 'https://sasapps.io/',
    author: 'Allan Bowe',
    twitter: 'https://twitter.com/analytium',
    facebook: 'https://www.facebook.com/analytium/',
    youtube: 'https://www.youtube.com/channel/UCo3g8hiOQk08N65nfOa9aCg',
    linkedin: 'https://www.linkedin.com/company/analytium/',
    adsense: '',
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-172951413-1',
        head: true,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/posts/`,
        name: 'posts',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/pages/`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-embed-video',
            options: {
              width: 750,
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
              wrapperStyle: 'margin-bottom: 1.0725rem;',
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'SASApps - Unleash Your Analytics',
        short_name: 'SASApps | Analytium',
        description:
          'Unleash your Analytics with bespoke SAS Apps - fast, user friendly, scalable analytics',
        homepage_url: 'https://sasapps.io/',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#00A5D7',
        display: 'standalone',
        icon: 'assets/favicon.png',
        icon_options: {
          purpose: `maskable`,
        },
        cache_busting_mode: 'none',
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        workboxConfig: {
          globPatterns: ['**/*'],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: `types/graphql-types.d.ts`,
      },
    },
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-twitter',
    'gatsby-plugin-typescript',
    'gatsby-transformer-sharp',
  ],
}
