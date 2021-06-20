import React from "react"
import Footer from "./footer"
import Header from "./header"

const Layout = ({ children }) => {
  return (
    <div className="dark:text-white dark:bg-nord0 transition-all">
      <div className="flex flex-col min-h-screen container mx-auto">
        <Header />
        <div className="flex-grow">{children}</div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
