import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Categories, Title } from "./index"
import Image from "gatsby-image"

export default function Articles({ articles, menuCategory, page, title }) {
  // console.log(articles);

  const allCategories = [
    "Tous les thèmes",
    ...new Set(articles.map(item => item.data.category)),
  ]

  const [categories] = useState(allCategories)
  const [articlesDisplayed, setArticlesDisplayed] = useState(articles)

  const filterCategory = category => {
    if (category === "Tous les thèmes") {
      setArticlesDisplayed(articles)
      return
    }
    const articlesSelected = articles.filter(
      item => item.data.category === category
    )
    setArticlesDisplayed(articlesSelected)
  }

  return (
    <Wrapper className="section">
      <Title title={title || "articles"} />
      {menuCategory && (
        <>
          {/* <div className="underline"></div> */}
          <Categories categories={categories} filterCategory={filterCategory} />
        </>
      )}

      <div className="section-center">
        {articlesDisplayed.map(article => {
          //   console.log(article)
          const { id, data } = article
          const { category, image, title, link } = data
          const fluid = image.localFiles[0].childImageSharp.fluid
          return (
            <article key={id} className="red">
              <div className="container">
                <Image fluid={fluid} className="img" />
                <div className="info">
                  <p>- {category} -</p>
                  <h3>{title}</h3>
                  <a href={link}>
                    <p>- Vers l'article -</p>
                  </a>
                </div>
              </div>
            </article>
          )
        })}
        {!page && (
          <Link to="/articles" className="btn center-btn">
            Articles
          </Link>
        )}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--clr-white);
  min-height: 100vh;
  .underline {
    width: 5rem;
    height: 0.25rem;
    background: var(--clr-black);
    margin-left: auto;
    margin-right: auto;
  }
  .section-center {
    margin-top: 4rem;
    max-width: var(--max-width);
    display: grid;
    gap: 2rem;
    /* safari workaround */
    grid-gap: 2rem;

    .img {
      height: 25rem;
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
        }
      }
      &:hover .info {
        opacity: 1;
      }
    }

    a {
      justify-self: center;
    }
  }
`
