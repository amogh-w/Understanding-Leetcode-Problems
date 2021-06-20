import React from "react"
import { SiGithub } from "react-icons/si"

const Footer = () => {
  return (
    <div className="flex justify-center text-xl md:text-2xl lg:text-3xl p-2">
      <a href="https://github.com/amogh-w">
        <SiGithub />
      </a>
    </div>
  )
}

export default Footer
