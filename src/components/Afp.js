import React from "react"
import styled from "styled-components"
import { Title } from "./index"

export default function Afp({ dispatches }) {
  // console.log(dispatches)

  return (
    <Wrapper className="section">
      <Title title="AFP" />
      <ul className="section-center">
        {dispatches.map((dispatch, index) => {
          console.log(dispatch)
          const {
            data: { link, title },
          } = dispatch

          return (
            <li className="dispatch">
              <h4>
                <a href={link}>{title}</a>
              </h4>
            </li>
          )
        })}
      </ul>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-color: white;
  min-height: 100vh;
  .section-center {
    margin-top: 4rem;
    max-width: var(--max-width);
    display: grid;
    justify-content: center;
    /* justify-items: center; */
    gap: 2rem;
    /* safari workaround */
    grid-gap: 2rem;

    a {
      color: var(--clr-grey-1);
    }
    .dispatch a {
      position: relative;
    }

    .dispatch a::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 3px;
      background-color: black;
      transform: scaleY(0);
      z-index: -1;
      transition: transform 0.2s, width 0.4s cubic-bezier(1, 0, 0, 1) 0.2s,
        background-color 0.1s;
    }

    .dispatch a:hover {
      color: white;
      z-index: 2;
    }

    .dispatch:hover a::before {
      transform: scaleY(1);
      width: 100%;
    }
  }
`
