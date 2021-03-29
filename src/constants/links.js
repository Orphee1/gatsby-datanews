import React from "react"
import { Link } from "gatsby"

const data = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "articles",
    url: "/articles/",
  },
  {
    id: 3,
    text: "AFP",
    url: "/afp/",
  },
  {
    id: 4,
    text: "data",
    url: "/data/",
  },
  {
    id: 5,
    text: "photos",
    url: "/pictures/",
  },
  // {
  //   id: 6,
  //   text: "about",
  //   url: "/about/",
  // },
  {
    id: 7,
    text: "contact",
    url: "/contact/",
  },
]

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <Link to={link.url}>{link.text}</Link>
    </li>
  )
})

export default ({ styleClass }) => {
  return <ul className={` ${styleClass ? styleClass : ""}`}>{tempLinks}</ul>
}
