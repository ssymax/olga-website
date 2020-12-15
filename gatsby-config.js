/* eslint-disable */
const path = require('path');
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`, // or '.env'
});

module.exports = {
  siteMetadata: {
    title: `Olga Łukasik Psycholog`,
    author: `Szymon Łukasik`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-svgr',
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `Lorem ipsum`,
    //     short_name: `Lorem ipsum`,
    //     start_url: `/`,
    //     background_color: '#FFD226',
    //     theme_color: '#FFD226',
    //     display: `minimal-ui`,
    //     icon: `src/assets/images/favicon.png`,
    //   },
    // },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, 'src/pages'),
        components: path.join(__dirname, 'src/components'),
        //templates: path.join(__dirname, 'src/components/templates'),
        // sections: path.join(__dirname, 'src/components/sections'),
        assets: path.join(__dirname, 'src/assets'),
        // routes: path.join(__dirname, 'src/routes'),
        // vendors: path.join(__dirname, 'src/vendors'),
        // utils: path.join(__dirname, 'src/utils'),
        // contexts: path.join(__dirname, 'src/context'),
        // providers: path.join(__dirname, 'src/providers'),
        // hooks: path.join(__dirname, 'src/hooks'),
        // helpers: path.join(__dirname, 'src/helpers'),
      },
    },
    // {
    //   resolve: 'gatsby-plugin-react-svg',
    //   options: {
    //     rule: {
    //       include: path.join(__dirname, 'src/assets'),
    //     },
    //   },
    // },
  ],
};
