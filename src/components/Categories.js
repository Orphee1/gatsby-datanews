import React from "react"
import styled from "styled-components"

const Categories = ({ categories, filterCategory }) => {
  return (
    <Wrapper>
      {categories.map((item, index) => {
        return (
          <button
            type="button"
            key={index}
            onClick={() => {
              filterCategory(item)
            }}
          >
            {item}
          </button>
        )
      })}
    </Wrapper>
  )
}

export default Categories

const Wrapper = styled.div`
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  width: 90%;
  button {
    position: relative;
    background: transparent;
    border-color: transparent;
    outline: none;
    font-size: 1rem;
    margin: 0 0.5rem;
    letter-spacing: 1px;
    padding: 0.375rem 0.75rem;
    color: var(--clr-black);
    cursor: pointer;
    transition: color 0.2s;
    border-radius: var(--radius);
  }

  button::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 3px;
    background: var(--clr-black);
    transform: scaleY(0);
    transition: transform 0.2s, width 0.4s cubic-bezier(1, 0, 0, 1) 0.2s,
      background-color 0.1s;
  }

  button:hover {
    color: var(--clr-white);
    z-index: 10;
  }

  button:hover::before {
    transform: scaleY(1);
    width: 100%;
    z-index: -1;
  }
  @media screen and (min-width: 50em) {
    width: 100%;
  }
`
