const path = require('path');
require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    author: `Szymon Łukasik`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/components/templates/MainTemplate/MainTemplate.js'),
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|cache|public)/,
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-stylelint',
      options: { files: ['**/*.{js,jsx}'], failOnError: false },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
      },
    },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, 'src/pages'),
        components: path.join(__dirname, 'src/components'),
        // templates: path.join(__dirname, 'src/components/templates'),
        // sections: path.join(__dirname, 'src/components/sections'),
        assets: path.join(__dirname, 'src/assets'),
        // routes: path.join(__dirname, 'src/routes'),
        vendors: path.join(__dirname, 'src/vendors'),
        // utils: path.join(__dirname, 'src/utils'),
        // contexts: path.join(__dirname, 'src/contexts'),
        // providers: path.join(__dirname, 'src/providers'),
        // hooks: path.join(__dirname, 'src/hooks'),
        // helpers: path.join(__dirname, 'src/helpers'),
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: path.join(__dirname, 'src/assets/images/svg'),
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
