import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { Articles, Layout } from "../components"

export default function ArticlesPage({ data }) {
  const {
    allAirtable: { nodes: articles },
  } = data

  return (
    <Wrapper>
      <Layout>
        <Articles articles={articles} title="Tous les articles" />
      </Layout>
    </Wrapper>
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

const Wrapper = styled.main`
  min-height: 100vh;
  background: var(--clr-grey-10);
  nav {
    background: #222;
  }
`
