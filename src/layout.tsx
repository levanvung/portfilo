import { Outlet } from "react-router-dom"
import AppHeader from "./components/layout/app.header"
import AppFooter from "./components/layout/app.footer"
import React from "react"

function Layout() {

  return (
    <div>
      <AppHeader />
      <Outlet />
      <AppFooter />
    </div>
  )
}

export default Layout