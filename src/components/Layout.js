import React from "react"
import "../css/main.css"
import { Footer, Navbar } from "./index"

export default function layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
