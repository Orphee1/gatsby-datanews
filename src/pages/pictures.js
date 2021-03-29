import React from "react"
import styled from "styled-components"
import { Layout, Pictures, SEO } from "../components"
import { graphql } from "gatsby"

export default function PicturesPage({ data }) {
  //   console.log(data)
  const {
    // allAirtable: { nodes: pictures },
    queryPics: { nodes: pictures },
  } = data

  return (
    <Wrapper>
      <SEO title="Pictures" />
      <Layout>
        <Pictures pictures={pictures} />
      </Layout>
    </Wrapper>
  )
}

export const query = graphql`
  {
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

const Wrapper = styled.main`
  min-height: 100vh;
  background: var(--clr-grey-10);
  nav {
    background: #222;
  }
`
