import React from "react"
import Links from "../constants/links"
import { FaTimesCircle } from "react-icons/fa"

export default function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div className={` sidebar ${isOpen && "show-sidebar"} `}>
      <button className="close-btn" onClick={toggleSidebar}>
        <FaTimesCircle />
      </button>
      <div className="side-container fl-col">
        <Links styleClass={` ${isOpen && "sidebar-links"} `} />
      </div>
    </div>
  )
}
