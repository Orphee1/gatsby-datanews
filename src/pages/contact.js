import React from "react"
import styled from "styled-components"
import { Contact, Layout } from "../components"
export default function ContactPage() {
  return (
    <Wrapper>
      <Layout>
        <Contact />
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
  .contact-form {
    background: var(--clr-white);
    /* border-radius: var(--radius); */
    text-align: center;
    box-shadow: var(--light-shadow);
    /* transition: var(--transition); */
    width: 90vw;
    max-width: 35rem;
  }
  .contact-form:hover {
    box-shadow: var(--dark-shadow);
  }
`
