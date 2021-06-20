import React from "react"
import useDarkMode from "use-dark-mode"
import { FaSun, FaMoon } from "react-icons/fa"

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false, {
    classNameDark: "dark",
    classNameLight: "light",
  })

  return (
    <button onClick={darkMode.toggle}>
      {darkMode.value ? <FaSun /> : <FaMoon />}
    </button>
  )
}

export default DarkModeToggle
