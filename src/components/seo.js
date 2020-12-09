import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"

const query = graphql`
  {
    site {
      siteMetadata {
        author
        description
        defaultTitle: title
        titleTemplate
        twitterUsername
        url
      }
    }
  }
`

const SEO = ({title}) => {
const {pathname} = useLocation();
const {site} = useStaticQuery(query);
const {description, defaultTitle, titleTemplate, twitterUsername, url} = site.siteMetadata; 
// console.log(site);

const seo = {
  title: title || defaultTitle, 
  description: description, 
  url: `${url}${pathname}`,
  titleTemplate: titleTemplate
}

  return (
    <Helmet title={`${seo.title} | ${defaultTitle}`} >
      <meta  name="description" content={seo.description}  />
       <meta property="og:url" content={seo.url} />
        <meta name="twitter:creator" content={twitterUsername} />
      
    </Helmet>
  )
}


export default SEO
