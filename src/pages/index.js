import React from "react"
import { graphql } from "gatsby"
import { Articles, Hero, Layout } from "../components"

export default function Home({ data }) {
  const {
    allAirtable: { nodes: articles },
  } = data
  //   console.log(articles)

  return (
    <Layout>
      <Hero />
      <Articles articles={articles} title="Derniers articles" />
    </Layout>
  )
}
export const query = graphql`
  {
    allAirtable(filter: { table: { eq: "Articles" } }, limit: 3) {
      nodes {
        id
        data {
          category
          link
          sum
          title
          image {
            localFiles {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      totalCount
    }
  }
`
