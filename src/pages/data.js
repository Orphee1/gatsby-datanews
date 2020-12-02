import React from "react"
import styled from "styled-components"
import { Layout } from "../components"

export default function DataPage() {
  return (
    <Wrapper>
      <Layout>
        <h1>Hello from Data page</h1>
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
