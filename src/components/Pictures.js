import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import base from "./Airtable"
import { AiFillLike } from "react-icons/ai"

// console.log(base)

export default function Pictures({ pictures }) {
  //   console.log(pictures)
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  !isLoading && console.log(items)

  const getRecords = async () => {
    const records = await base("LikePics")
      .select({})
      .firstPage()
      .catch(error => console.log(error))
    console.log(records)
    const newItems = records.map(record => {
      const { id, fields } = record
      return {
        id,
        fields,
      }
    })
    setItems(newItems)
    setIsLoading(false)
  }

  useEffect(() => {
    getRecords()
  }, [])

  const giveVote = async id => {
    setIsLoading(true)
    const tempItems = [...items].map(item => {
      if (item.id === id) {
        let { id, fields } = item
        fields = { ...fields, votes: fields.votes + 1 }
        return { id, fields }
      } else {
        return item
      }
    })
    const records = await base("LikePics")
      .update(tempItems)
      .catch(error => console.log(error))
    const newItems = records.map(record => {
      const { id, fields } = record
      return {
        id,
        fields,
      }
    })
    setItems(newItems)
    setIsLoading(false)
  }

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
            <article key={id} className={`div-${index}`}>
              <Image className="img" fluid={fluid} />
              <div className="info">
                <AiFillLike
                  fontSize="2rem"
                  style={{ marginBottom: "1.5rem" }}
                />
                <p>0 j'aime</p>
                <p>{location}</p>
              </div>
            </article>
          )
        })}
      </div>
      <div className="container">
        <h3>Votre photo préférée? </h3>
        {isLoading ? (
          <h3>...loading</h3>
        ) : (
          <ul>
            {items.map(item => {
              //       console.log(item)
              const {
                id,
                fields: { name, votes },
              } = item
              return (
                <li key={id}>
                  <div className="key">{name.toUpperCase()}</div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <p>{votes} j'aime</p>
                    <AiFillLike
                      fontSize="2rem"
                      onClick={() => {
                        giveVote(id)
                      }}
                    />
                  </div>
                </li>
              )
            })}
          </ul>
        )}
      </div>
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
    /* border-radius: var(--radius); */
    /* transition: var(--transition); */
  }
  article {
    position: relative;
    &:hover .img {
      opacity: 0.4;
    }
    .info {
      position: absolute;
      top: 40%;
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
        "a b b"
        "c b b"
        "d d e"
        "d d f"
        "g h h";

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

  .container {
    width: 90vw;
    max-width: var(--max-width);
    margin: 2rem auto 0 auto;
    h3 {
      text-align: center;

      color: white;
      margin-bottom: 4rem;
    }
    ul {
      margin-top: 2rem;
      display: grid;
      gap: 2rem;
      grid-gap: 2rem;
      @media (min-width: 992px) {
        & {
          grid-template-columns: 1fr 1fr;
        }
      }
      @media (min-width: 1200px) {
        & {
          grid-template-columns: 1fr 1fr 1fr;
        }
      }
    }
    li {
      background: var(--clr-grey-10);
      border-radius: var(--radius);
      padding: 0.75rem 1rem;
      display: grid;
      grid-template-columns: auto 1fr auto;
      gap: 0 3rem;
      grid-gap: 0 3rem;
      align-items: center;
      .key {
        color: var(--clr-white);
        font-size: 1.5rem;
        background: var(--clr-primary-7);
        padding: 0.5rem 1rem;
        border-radius: var(--radius);
      }
      p {
        margin-bottom: 0;
        color: var(--clr-grey-5);
        letter-spacing: var(--spacing);
      }
      h4 {
        margin-bottom: 0;
      }
      button {
        background: transparent;
        border-color: transparent;
        font-size: 2rem;
        cursor: pointer;
        color: var(--clr-black);
      }
    }
  }
`
