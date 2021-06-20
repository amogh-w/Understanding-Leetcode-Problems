import React from "react"
import DarkModeToggle from "./darkModeToggle"

const Header = () => {
  return (
    <div className="flex text-xl md:text-2xl lg:text-3xl p-2">
      <div className="flex-grow">Understanding LeetCode Problems</div>
      <DarkModeToggle />
    </div>
  )
}

export default Header
