import React from "react"

import "./layout.scss"
import "./overrides.scss"
import "./index.scss"

const Layout = ({ children }) =>
  <main className="layout">{children}</main>

export default Layout
