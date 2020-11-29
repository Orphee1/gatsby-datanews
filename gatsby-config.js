/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `HL Data News`,
    description: `HL data news website. Built with Gatsby, using Airtable`,
    author: `Hugo Lattard`,
    titleTemplate: `%s | HL Data News`,
    //   url: ``,
    //   image: ``,
    twitterUsername: `@HugoLattard`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
}
