import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { Survey } from "./index"

export default function Pictures({ pictures }) {
  //   console.log(pictures)

  return (
    <Wrapper className="section">
      <div className="tile-layout">
        {pictures.map((item, index) => {
          const {
            data: {
              image: { localFiles, id },
              location,
            },
          } = item
          const fluid = localFiles[0].childImageSharp.fluid
          return (
            <article key={index} className={`div-${index}`}>
              <Image className="img" fluid={fluid} />
              <span>{index + 1}</span>
              <div className="info">
                <p>{location}</p>
              </div>
            </article>
          )
        })}
      </div>
      <Survey />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--clr-grey-0);
  .tile-layout {
    margin-top: 2rem;
    display: grid;
    width: 90vw;
    max-width: var(--max-width);
    margin: 0 auto;
    gap: 1rem;
    /* safari workaround */
    grid-gap: 1rem;
    grid-template-rows: 300px 300px;
    grid-auto-rows: 300px;
  }
  .img {
    height: 100%;
    transition: var(--transition);
  }
  article {
    position: relative;
    &:hover .img {
      opacity: 0.4;
    }
    span {
      color: white;
      position: absolute;
      top: 90%;
      left: 2%;
      opacity: 0;
    }

    .info {
      position: absolute;
      top: 50%;
      left: 0;
      /* transform: translate(-50%, -50%); */
      width: 100%;
      opacity: 0;
      transition: var(--transition);
      color: white;
      text-align: center;
      p {
        color: white;
      }
    }
    &:hover .info {
      opacity: 1;
    }
    &:hover span {
      opacity: 1;
    }
  }

  @media (min-width: 768px) {
    .tile-layout {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 992px) {
    .tile-layout {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 250px 250px;
      grid-auto-rows: 250px;
    }
  }
  @media (min-width: 1200px) {
    .tile-layout {
      display: grid;
      grid-template-areas:
        "a a b"
        "a a c"
        "d e e"
        "f e e"
        "g g h";

      .div-0 {
        grid-area: a;
      }
      .div-1 {
        grid-area: b;
      }
      .div-2 {
        grid-area: c;
      }
      .div-3 {
        grid-area: d;
      }
      .div-4 {
        grid-area: e;
      }
      .div-5 {
        grid-area: f;
      }
      .div-6 {
        grid-area: g;
      }
      .div-7 {
        grid-area: h;
      }
    }
  }
`
