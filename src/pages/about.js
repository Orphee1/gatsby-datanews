import React from "react"
import styled from "styled-components"
import { Layout, SEO } from "../components"

export default function AboutPage() {
  return (
    <Wrapper>
      <SEO title="About"/>
      <Layout>
        <h1>Hello from About page</h1>
      </Layout>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  min-height: 100vh;
  background: var(--clr-grey-10);
  nav {
    background: #222;
  }
`
