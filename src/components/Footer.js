import React from "react"
import styled from "styled-components"
import SocialLinks from "../constants/socialLinks"

export default function Footer() {
  return (
    <Wrapper>
      <div>
        <SocialLinks styleClass="footer-links" />
        <h4>
          &copy; {new Date().getFullYear()} <span>HL</span> built with Gatsby
        </h4>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  height: 9rem;
  background: #222;
  text-align: center;
  display: grid;
  place-items: center;
  h4 {
    /* color: var(--clr-white); */
    margin-top: 0.5rem;
    color: white;
    margin-bottom: 0;
    @media (max-width: 576px) {
      font-size: 0.75rem;
    }
    span {
      /* color: var(--clr-primary-5); */
      color: #2caeba;
    }
  }
  .footer-links {
    justify-content: center;
    display: flex;
    margin: 0 auto 1rem auto;
    .social-links {
      margin-top: 2rem;
      width: 15rem;
      display: flex;
      justify-content: space-between;
    }
    .social-link {
      margin: 0 0.5rem;
      font-size: 1.75rem;
      /* color: var(--clr-grey-1); */
      color: white;
      transition: var(--transition);
    }
    .social-link:hover {
      color: var(--clr-primary-5);
    }
  }
`
