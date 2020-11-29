/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `HL Data News`,
    description: `HL data news website. Built with Gatsby, using Airtable`,
    author: `Hugo Lattard`,
    titleTemplate: `%s | HL Data News`,
    url: `https://hugo-lattard-journaliste.netlify.app/`,
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
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.GATSBY_AIRTABLE_API,
        concurrency: 5,
        tables: [
          {
            baseId: process.env.GATSBY_AIRTABLE_BASE_ID,
            tableName: `Articles`,
            mapping: { image: `fileNode` },
          },
        ],
      },
    },
  ],
}
