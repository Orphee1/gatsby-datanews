import React from "react"
import { GoThreeBars } from "react-icons/go"
import styled from "styled-components"
import PageLinks from "../constants/links"
import { Link } from "gatsby"

export default function NavBar() {
  return (
    <Wrapper className="">
      <div className="nav-center">
        <div className="nav-header">
          <h3>Data News</h3>
          <button className="toggle-btn">
            <GoThreeBars />
          </button>
        </div>
        <ul className="nav-links">
          {PageLinks.map(link => {
            return (
              <li key={link.id}>
                <Link to={link.url}>{link.text}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  /* position: relative; */
  /* background: transparent; */
  z-index: 1;
  height: 5rem;
  display: flex;
  align-items: center;
  .nav-center {
    width: 90vw;
    margin: 0 auto;
    /* max-width: var(--max-width); */
    max-width: 1170px;
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h3 {
      color: white;
    }
    .toggle-btn {
      width: 3.5rem;
      height: 2.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      border-radius: 1.5rem;
      border: transparent;
      color: var(--clr-white);
      background: var(--clr-primary-5);
      cursor: pointer;
      transition: var(--transition);
      &:hover {
        background: var(--clr-primary-3);
      }
    }
  }
  .nav-links {
    display: none;
  }
  @media screen and (min-width: 768px) {
    .nav-header {
      .toggle-btn {
        display: none;
      }
    }
    .nav-links {
      display: flex;
      justify-content: flex-end;
    }
    .nav-links li {
      margin-right: 2rem;
    }
    .nav-links a {
      text-transform: capitalize;
      /* color: var(--clr-grey-1); */
      color: white;
      font-weight: bold;
      letter-spacing: var(--spacing);
      transition: var(--transition);
      padding: 0.5rem 0;
    }

    .nav-links a:hover {
      /* color: var(--clr-primary-5); */
      color: #f3d279;
      /* box-shadow: 0px 2px var(--clr-primary-5); */
      box-shadow: 0px 2px #f3d279;
    }

    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
    }
  }
  @media screen and (min-width: 992px) {
    .navbar {
      background: transparent;
    }
  }
`
