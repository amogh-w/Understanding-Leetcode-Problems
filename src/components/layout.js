import React from "react"
import { Helmet } from "react-helmet"

import Footer from "./footer"
import Header from "./header"

const Layout = ({ title, children }) => {
  return (
    <div className="dark:text-white dark:bg-nord0 transition-all">
      <Helmet title={title} />
      <div className="flex flex-col min-h-screen container mx-auto">
        <Header />
        <div className="flex-grow">{children}</div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
