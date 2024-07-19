/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `damaac`,
    description: `Dubai Seaview apartment buildings`,
    siteUrl: `https://bishoy.scizers.com/`
  },
  plugins: [    
    'gatsby-plugin-postcss',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `o`,
        // Path to the directory
        path: `${__dirname}/src/markdown/o`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `f`,
        // Path to the directory
        path: `${__dirname}/src/markdown/f`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `Images`,
        // Path to the directory
        path: `${__dirname}/src/Images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `amenities`,
        // Path to the directory
        path: `${__dirname}/src/markdown/amenities`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `gallery`,
        // Path to the directory
        path: `${__dirname}/src/markdown/gallery`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `gallery2`,
        // Path to the directory
        path: `${__dirname}/src/markdown/gallery2`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `floor`,
        // Path to the directory
        path: `${__dirname}/src/markdown/floor`,
      },
    },
  ],
}
