import React from "react"
import styled from "styled-components"
import { Layout, Pictures } from "../components"
import { graphql } from "gatsby"

export default function PicturesPage({ data }) {
  //   console.log(data)
  const {
    allAirtable: { nodes: pictures },
  } = data

  return (
    <Wrapper>
      <Layout>
        <Pictures pictures={pictures} />
      </Layout>
    </Wrapper>
  )
}

export const query = graphql`
  {
    allAirtable(filter: { table: { eq: "Pics" } }) {
      totalCount
      nodes {
        data {
          votes
          location
          image {
            localFiles {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            id
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
