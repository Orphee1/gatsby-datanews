import React from "react"
import styled from "styled-components"
import { topics } from "../../constants/data-topics"

const DataMenuBar = ({ toggleDisplay }) => {
  return (
    <Wrapper>
      <div className="menu-center">
        {topics.map(topic => {
          return (
            <button
              type="button"
              className="topic"
              key={topic.id}
              onClick={() => {
                toggleDisplay(topic.title)
              }}
            >
              <h4>{topic.title}</h4>
            </button>
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 3.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  .menu-center {
    width: 90vw;
    max-width: var(--max-width);
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .topic {
    width: 100%;
    height: 3.5rem;
    border: 2px solid var(--clr-black);
    border-left: none;
    transition: var(--transition);
    background-color: transparent;
    cursor: pointer;
    outline: none;
    position: relative;

    h4 {
      position: absolute;
      left: 1rem;
      /* transition: all 0.2s ease-in-out; */
    }
  }
  .topic:hover {
    /* background-color: yellow; */
    background-color: var(--clr-black);
    h4 {
      color: var(--clr-white);
      /* font-weight: bold; */
      /* font-size: 1.2rem; */
    }
  }
  @media screen and (min-width: 992px) {
    .menu-center {
      width: 95vw;
    }
  }
`

export default DataMenuBar
