import React from "react"
import { GoThreeBars } from "react-icons/go"
import styled from "styled-components"
import PageLinks from "../constants/links"

export default function NavBar({ isOpen, toggleSidebar }) {
  return (
    <Wrapper className="">
      <div className="nav-center">
        <div className="nav-header">
          <h3>Data News</h3>
          {!isOpen && (
            <button className="toggle-btn" onClick={toggleSidebar}>
              <GoThreeBars />
            </button>
          )}
        </div>
        <PageLinks styleClass="nav-links" />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: transparent;
  z-index: 1;
  height: 5rem;
  display: flex;
  align-items: center;
  .nav-center {
    width: 90vw;
    margin: 0 auto;
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
      background: var(--clr-primary-3);

      cursor: pointer;
      transition: var(--transition);
      &:hover {
        background: var(--clr-red-dark);
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
      color: white;
      font-weight: bold;
      letter-spacing: var(--spacing);
      transition: var(--transition);
      padding: 0.5rem 0;
    }

    .nav-links a:hover {
      color: var(--clr-red-dark);
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
