import React, { useState, useEffect } from "react"
import styled from "styled-components"
import base from "./Airtable"
import { AiFillLike } from "react-icons/ai"
import { BsPencilSquare } from "react-icons/bs"

// console.log(base)

export default function Survey() {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [openForm, setOpenForm] = useState(true)
  console.log(openForm)
  //   !isLoading && console.log(items)

  const getRecords = async () => {
    const records = await base("LikePics")
      .select({
        sort: [{ field: "name", direction: "asc" }],
      })
      .firstPage()
      .catch(error => console.log(error))
    console.log(records)
    const newItems = records.map(record => {
      const { id, fields } = record
      return {
        id,
        fields,
        // Add formOpen: false?? et le on click le fait passer à true??
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
    <Wrapper>
      <div className="container">
        <h3>Votre photo préférée? </h3>
        {isLoading ? (
          <h3>...loading</h3>
        ) : (
          <ul>
            {items.map((item, index) => {
              //       console.log(item)
              const {
                id,
                fields: { name, votes },
              } = item
              return (
                <li key={id}>
                  <div className="key">{name}</div>
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
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        giveVote(id)
                      }}
                    />
                    <BsPencilSquare
                      fontSize="2rem"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setOpenForm(true)
                      }}
                    />
                  </div>
                  {openForm && (
                    <article className="contact-form">
                      <form>
                        <div className="form-group">
                          <textarea
                            name="message"
                            id=""
                            rows="3"
                            placeholder="écrivez un commentaire"
                            className="form-control"
                          ></textarea>
                        </div>
                        {/* <button type="submit" className="btn submit-btn ">
                          Envoyer
                        </button> */}
                      </form>
                    </article>
                  )}
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
      position: relative;
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
    .contact-form {
      position: absolute;
      /* top: 0; */
      top: -10%;
      /* left: 0; */
      left: 40%;

      background: var(--clr-white);
      border-radius: var(--radius);
      text-align: center;
      box-shadow: var(--light-shadow);
      transition: var(--transition);
      /* width: 90vw; */
      max-width: 35rem;
    }
    .contact-form:hover {
      /* box-shadow: var(--dark-shadow); */
    }
    .form-group {
      padding: 1rem 1.5rem;
    }
    .form-control {
      display: block;
      width: 100%;
      padding: 0.75rem 1rem;
      border: none;
      margin-bottom: 1.25rem;
      background: var(--clr-grey-10);
      border-radius: var(--radius);
      text-transform: uppercase;
      letter-spacing: var(--spacing);
    }
  }
`
