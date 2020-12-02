import React from "react"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const query = graphql`
  {
    file(relativePath: { eq: "hero-img.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default function Background({ children, image }) {
  const data = useStaticQuery(query)
  //   console.log(data)
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = data
  return (
    <Wrapper>
      <BackgroundImage
        Tag="div"
        fluid={image || fluid}
        // fluid={fluid}
        preserveStackingContext={true}
        className="bcg"
      >
        {children}
      </BackgroundImage>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .bcg {
    /* MUST!!!!!! */
    min-height: 100vh;
    margin-top: -5rem;
    display: grid;
    place-items: center;
  }
`
