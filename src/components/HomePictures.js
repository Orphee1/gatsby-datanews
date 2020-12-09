import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Background } from "./index"
import { FiChevronRight, FiChevronLeft } from "react-icons/fi"

export default function HomePictures({ pictures, title }) {
  const images = pictures.map(item => {
    //     console.log(item)
    const {
      data: {
        image: { localFiles },
      },
    } = item
    const img = localFiles[0].childImageSharp.fluid
    return img
  })

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const lastIndex = images.length - 1

    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
      console.log("reset index")
    }
  }, [index, images])

  return (
    <Wrapper>
      <Background image={images[index]}>
        <article>
          <h1>En images</h1>
          <Link to="/pictures" className="btn center-btn">
            Photos
          </Link>
        </article>
        <button
          className="prev-btn"
          onClick={() => {
            setIndex(index - 1)
          }}
        >
          <FiChevronLeft />
        </button>
        <button
          className="next-btn"
          onClick={() => {
            setIndex(index + 1)
          }}
        >
          <FiChevronRight />
        </button>
      </Background>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  height: 100%;
  .article {
    width: 85vw;
    max-width: 800px;
    color: white;
    text-align: center;
  }
  h1 {
    /* text-transform: uppercase; */
    font-weight: 500;
    line-height: 1.25;
    margin: 2rem 0 3rem 0;
    letter-spacing: 3px;
    color: white;
  }
  .next-btn,
  .prev-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 2.5rem;
    background: transparent;
    /* color: var(--clr-white); */
    color: white;
    border: transparent;
    cursor: pointer;
    outline: none;
    transition: var(--transition);
    @media (min-width: 800px) {
      & {
        font-size: 4.5rem;
      }
    }
  }
  .next-btn:hover,
  .prev-btn:hover {
    /* color: var(--clr-primary-5); */
    color: var(--clr-red-dark);
  }
  .prev-btn {
    left: 0;
  }
  .next-btn {
    right: 0;
  }

  @media (min-width: 1000px) {
    .prev-btn {
      left: 3rem;
    }
    .next-btn {
      right: 3rem;
    }
  }
`
