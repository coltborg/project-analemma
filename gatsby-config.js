module.exports = {
  siteMetadata: {
    author: `@coltborg`,
    description: `Colt Borg is a frontend developer, learning in public.`,
    shareImage: `/images/coltborg-share.png`,
    title: `Colt Borg`,
    titleInitials: `CB`,
    htmlClasses: `font-ia-writer text-xl sm:text-lg hd:text-xl text-gray-900 antialiased leading-normal`,
    bodyClasses: `min-h-screen bg-gray-100`,
  },
  plugins: [
    {
      resolve: `gatsby-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve(`./src/components/layout.js`),
        },
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1035,
              sizeByPixelDensity: true,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'images',
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require('postcss-import')(),
          require('tailwindcss')(),
          require('postcss-custom-properties')(),
          require('autoprefixer')(),
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/src/articles/`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
