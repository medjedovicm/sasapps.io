/* eslint-disable @typescript-eslint/camelcase */
module.exports = {
  siteMetadata: {
    title: 'SASApps | Analytium | Analytics For Every Business',
    description:
      'Provides SAS Apps Solution, Experts in SAS Data Analytics and Management. Analyse Implement Maximise',
    siteUrl: 'http://sasapps.io/',
    author: 'Allan Bowie',
    twitter: 'https://twitter.com/analytium',
    facebook: 'https://www.facebook.com/analytium/',
    youtube: 'https://www.youtube.com/channel/UCo3g8hiOQk08N65nfOa9aCg',
    linkedin: 'https://www.linkedin.com/company/analytium/',
    adsense: '',
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        enableIdentityWidget: true,
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
        name: 'SASApps | Analytium | Analytics For Every Business',
        short_name: 'SASApps | Analytium',
        description:
          'Experts in SAS Data Analytics and Management. Analyse Implement Maximise',
        homepage_url: 'http://sasapps.io/',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#00A5D7',
        display: 'standalone',
        icon: 'assets/an-512.png',
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
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: '',
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
