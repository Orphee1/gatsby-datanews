import React from 'react'
import {Layout, SEO } from "../components"
import {Link} from "gatsby"
import styled from "styled-components"


const ErrorPage = () => {
  return (
 
    <Wrapper>
      <SEO title="Not found"/>
         <Layout>
       <h1>Oop's </h1>
        <p>The page you're looking for doesn&#39;t exist... </p>
      <Link to="/" className="btn">
        <span>Home</span>
      </Link>
      <p>The page you're looking for doesn&#39;t exist... </p>
      </Layout>
    </Wrapper>

  )
}

export default ErrorPage

const Wrapper = styled.main`

min-height: calc(100vh - 5rem);
  /* height: auto; */
  /* margin: 0; */
  background: black;
  display: grid;
  place-items: center;
   nav {
    background: #222;
  }
  footer {
    width: 100%;
    position: fixed; 
    bottom: 0; 
  }
  h1,
  p {
    color: white;
  }
  span {
    color: #006d69;
  }
  p,
  span {
    font-size: 1.2rem;
  }
`
