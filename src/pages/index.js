import React from "react"
import { graphql } from "gatsby"
import { Articles, Hero, Layout } from "../components"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Articles />
    </Layout>
  )
}
