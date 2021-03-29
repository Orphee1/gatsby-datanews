import React from "react"
import styled from "styled-components"
// import SocialLinks from "../constants/socialLinks"

export default function Footer() {
  return (
    <Wrapper>
      <div>
        <h4>
          &copy; {new Date().getFullYear()} <span>HL</span> built with Gatsby
        </h4>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  height: 16rem;
  background: #222;
  text-align: center;
  display: grid;
  place-items: center;
  h4 {
    margin-top: 0.5rem;
    color: white;
    margin-bottom: 0;
    span {
      color: var(--clr-red-dark);
    }
  }
`
