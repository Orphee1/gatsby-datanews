import React from "react"
import styled from "styled-components"
import { Layout, SEO, Title } from "../components"
import { Covid, DataMenuBar, Test } from "../components/Data"
// import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from "./Charts"

export default function DataPage() {
  const [display, setDisplay] = React.useState("Covid")

  const toggleDisplay = topic => {
    setDisplay(topic)
  }

  return (
    <Wrapper>
      <SEO title="Data" />
      <Layout>
        <Wrapper className="section">
          <Title title="Data" />
          <DataMenuBar toggleDisplay={toggleDisplay} />
          <section className="section-center">
            {display === "Covid" && <Covid />}
            {display === "Test1" && <Test />}
          </section>
        </Wrapper>
      </Layout>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  min-height: 100vh;
  background: var(--clr-white);
  nav {
    background: var(--clr-primary);
  }
`
