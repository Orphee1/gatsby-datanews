import React from "react"
import { graphql } from "gatsby"
import { Articles, Layout } from "../components"

export default function articles({ data }) {
  const {
    allAirtable: { nodes: articles },
  } = data

  return (
    <Layout>
      <Articles articles={articles} title="Tous les articles" />
    </Layout>
  )
}

export const query = graphql`
  {
    allAirtable(filter: { table: { eq: "Articles" } }) {
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
