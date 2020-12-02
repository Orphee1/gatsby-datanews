import React from "react"
import { graphql } from "gatsby"
import { Articles, Hero, HomePictures, Layout } from "../components"

export default function Home({ data }) {
  //   console.log(data)
  const {
    allAirtable: { nodes: articles },
    queryPics: { nodes: pictures },
  } = data
  //   console.log(articles)

  return (
    <Layout>
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
    queryPics: allAirtable(filter: { table: { eq: "Pics" } }) {
      totalCount
      nodes {
        id
        data {
          image {
            localFiles {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          location
        }
      }
    }
  }
`
