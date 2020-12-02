import React from "react"
import styled from "styled-components"

export default function Contact() {
  return (
    <Wrapper className="">
      <article className>
        <h3>get in touch</h3>
        <form action="https://formspree.io/f/mnqobwzy" method="POST">
          <div className="form-group">
            <input type="text" placeholder="name" className="form-control" />
            <input type="email" placeholder="email" className="form-control" />
            <textarea
              name="message"
              id=""
              rows="5"
              placeholder="message"
              className="form-control"
            ></textarea>
          </div>
          <button className="btn">submit</button>
        </form>
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 5rem 0;
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
  display: grid;
  place-items: center;
  article {
    background: var(--clr-white);
    text-align: center;
    box-shadow: var(--light-shadow);
    transition: var(--transition);
    width: 90vw;
    max-width: 35rem;
  }
  article:hover {
    box-shadow: var(--dark-shadow);
  }
  article h3 {
    padding-top: 1.25rem;
    color: black;
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
  .form-control::placeholder {
    font-family: var(--ff-primary);
    color: var(--clr-grey-1);
    text-transform: uppercase;
    letter-spacing: var(--spacing);
  }
  button {
    display: block;
    width: 100%;
    padding: 1rem;
    border-bottom-left-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
    border-top-right-radius: 0;
    border-top-left-radius: 0;
  }
`
