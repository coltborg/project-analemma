module.exports = {
  siteMetadata: {
    author: `@coltborg`,
    description: `Colt Borg is a frontend developer, learning in public.`,
    shareImage: `/images/coltborg-share.png`,
    title: `Colt Borg`,
    titleInitials: `CB`,
    htmlClasses: `font-ia-writer text-lg md:text-xl text-neutral-900 antialiased leading-normal`,
    bodyClasses: `min-h-screen bg-neutral-50`,
    speakingList: [
      {
        date: `10/23/2018`,
        title: `CodePen Chicago: October 2018`,
        url: `https://codepen.io/brianmontanaweb/post/codepen-chicago-october-23rd-2018-at-backstop-solutions#colt-borg-6`,
      },
      {
        date: `10/15/2018`,
        title: `Reusable Vue.js Components: Slots, Scoped Slots, and Render Function`,
        url: `https://www.meetup.com/Chicago-Vue-js/events/255105052/`,
      },
      {
        date: `5/30/2018`,
        title: `CodePen Chicago: May 2018`,
        url: `https://codepen.io/brianmontanaweb/post/codepen-chicago-may-30th-2018-sprout-social#colt-borg-6`,
      },
      {
        date: `1/19/2017`,
        title: `Jekyll: Static Sites on Steroids`,
        url: `https://irl.chicagofriends.website/archive.html`,
      },
      {
        date: `10/31/2016`,
        title: `CodePen Chicago: October 2016 `,
        url: `https://codepen.io/poopsplat/post/codepen-chicago-october-2016#colt-borg-1`,
      },
      {
        date: `8/26/2016`,
        title: `CodePen Chicago: August 2016`,
        url: `https://codepen.io/poopsplat/post/codepen-chicago-august-2016#colt-borg-8`,
      },
    ],
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
