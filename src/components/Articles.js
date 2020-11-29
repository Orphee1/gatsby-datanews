import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Title from "./index"
import Image from "gatsby-image"

export default function Articles({ title }) {
  return (
    <Wrapper className="section">
      <div className="section-center">
        <h3>Hello from articles component!</h3>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .section-center {
    margin-top: 4rem;
    max-width: var(--max-width);
    display: grid;
    gap: 2rem;
    /* safari workaround */
    grid-gap: 2rem;
  }
`
