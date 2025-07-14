import React from 'react'
import FarmerRoutes from '../PublicRoutes/FarmerRoutes'
import Navbar from "../Components/Navbar/Navbar"
import Footer from "../Components/Footer/Footer"
const AppLayout = () => {
  return (
    <>
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <Navbar />
      </div>
      <FarmerRoutes />
       <Footer/>
    </>
  )
}

export default AppLayout
