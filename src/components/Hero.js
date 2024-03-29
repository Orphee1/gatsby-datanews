import React from "react"
import { Background } from "./index"
import styled from "styled-components"

export default function Hero() {
  return (
    <Wrapper>
      <Background>
        <div className="section-center hero-center">
          <article className="hero-info">
            <h1>Hugo Lattard</h1>
          </article>
        </div>
      </Background>
    </Wrapper>
  )
}

export const Wrapper = styled.section`
  .hero-center {
    height: 100%;
    display: grid;
    align-items: center;
    .hero-info {
      background: transparent;
    }

    h1,
    h3 {
      color: white;
    }
  }
`
