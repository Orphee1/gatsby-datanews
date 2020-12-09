import React from "react"
import { graphql } from "gatsby"
import { Articles, Hero, HomePictures, Layout, SEO } from "../components"

export default function Home({ data }) {
  //   console.log(data)
  const {
    allAirtable: { nodes: articles },
    queryPics: { nodes: pictures },
  } = data
  //   console.log(articles)

  return (
    <Layout>
      <SEO title="Home"/>
      <Hero />
      <Articles articles={articles} title="Derniers articles" />
      <HomePictures pictures={pictures} />
    </Layout>
  )
}
export const query = graphql`
  {
    allAirtable(filter: { table: { eq: "Articles" } }, limit: 2) {
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
    queryPics: allAirtable(
      filter: { table: { eq: "Pics" } }
      sort: { order: ASC, fields: data___order }
    ) {
      totalCount
      nodes {
        data {
          location
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
    }
  }
`
