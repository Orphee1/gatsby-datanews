import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Title from "./Title"
import Image from "gatsby-image"

export default function Articles({ articles, page, title }) {
  return (
    <Wrapper className="section">
      <Title title={title || "articles"} />
      <div className="section-center">
        {articles.map(article => {
          //   console.log(article)
          const { id, data } = article
          const { category, image, title, sum, link } = data
          const fluid = image.localFiles[0].childImageSharp.fluid
          return (
            <article key={id}>
              <div className="container">
                <Image fluid={fluid} className="img" />
                <div className="info">
                  <p>- {category} -</p>
                  <h3>{title}</h3>
                </div>
              </div>
            </article>
          )
        })}
      </div>
      {!page && (
        <Link to="/articles" className="btn center-btn">
          Articles
        </Link>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: white;
  .section-center {
    margin-top: 4rem;
    max-width: var(--max-width);
    display: grid;
    gap: 2rem;
    /* safari workaround */
    grid-gap: 2rem;
    .img {
      height: 20rem;
      transition: var(--transition);
    }
    article {
      box-shadow: var(--light-shadow);
      transition: var(--transition);
    }
    article:hover {
      box-shadow: var(--dark-shadow);
    }
    .container {
      position: relative;
      overflow: hidden;
      background: var(--clr-red-dark);
      &:hover .img {
        opacity: 0.3;
      }
      .info {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        opacity: 0;
        transition: var(--transition);
        color: var(--clr-white);
        text-align: center;
        p {
          margin-bottom: 0.5rem;
          color: var(--clr-white);
          text-transform: uppercase;
        }
      }
      &:hover .info {
        opacity: 1;
      }
    }
  }
`
