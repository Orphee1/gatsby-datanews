import React from "react"
import { Background } from "./index"
import styled from "styled-components"
import { Link, graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"

export default function Hero() {
  return (
    <Wrapper>
      <Background>
        <div className="section-center hero-center">
          <article className="hero-info">
            <div className="underline"></div>
            <h1>Hugo Lattard</h1>
            <h4>Journaliste freelance</h4>
            <Link to="/contact" className="btn">
              Contact me
            </Link>
            <SocialLinks styleClass="hero-links" />
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
      .hero-links a {
        margin: 0 0.5rem;
      }
    }

    h1,
    h4 {
      color: white;
    }
  }
`