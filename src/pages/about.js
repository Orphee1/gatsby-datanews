import React from "react"
import styled from "styled-components"
import { Layout, SEO } from "../components"

export default function AboutPage() {
  return (
    <Wrapper>
      <SEO title="About" />
      <Layout>
        <Wrapper className="section">
          <section className="section-center about">
            <h4>Work in progress...</h4>
            {/* <article className="bio red">Biography</article> */}
            {/* <aside className="curi orange">Curiculum</aside> */}
          </section>
        </Wrapper>
      </Layout>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  min-height: 100vh;
  background: var(--clr-grey-10);
  nav {
    background: var(--clr-primary);
  }
  .about {
    display: flex;
    flex-direction: column;
    @media only screen and (min-width: 50em) {
      flex-direction: row;
    }
  }
  .bio {
    height: 30vh;
  }
  .curi {
    height: 30vh;
  }
`
