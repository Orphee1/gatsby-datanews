import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { Afp, Layout, SEO } from "../components"

export default function AfpPage({ data }) {
  // console.log(data)
  const {
    // allAirtable: { nodes: dispatches },
    queryAFP: { nodes: dispatches },
  } = data

  return (
    <Wrapper>
      <SEO title="AFP" />
      <Layout>
        <Afp dispatches={dispatches} />
      </Layout>
    </Wrapper>
  )
}

export const query = graphql`
  {
    queryAFP: allAirtable(
      filter: { table: { eq: "Afp" } }
      sort: { fields: data___date, order: DESC }
    ) {
      nodes {
        data {
          date
          link
          title
        }
      }
    }
  }
`

const Wrapper = styled.main`
  min-height: 100vh;
  background-color: var(--clr-grey-10);
  nav {
    background-color: var(--clr-primary);
  }
`
