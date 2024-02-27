import React from 'react'
import { Outlet } from 'react-router-dom'
import Navv from './Home/Navv'
import Footer from './Home/Footer/Footer'
const Laout = () => {
  return (
    <div>
      <Navv />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Laout
