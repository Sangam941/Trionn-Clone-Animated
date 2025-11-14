import { Menu } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return ( 
    <div className='flex items-center justify-between py-3 fixed top-0 w-full z-50 px-6 sm:px-12 md:px-24 lg:px-32'>
      
      {/* Logo */}
      <div className="logo w-28 sm:w-32 md:w-36">
        <img src="/images/trionn_logo.svg" alt="logo" className="w-full h-auto" />
      </div>

      {/* Middle Icons - hidden on small screens */}
      <div className="middle hidden sm:flex items-center justify-center gap-3">
        <img src="/images/sun.svg" alt="sun" className="w-5 sm:w-6 md:w-7" />
        <img src="/images/stats.svg" alt="stats" className="w-5 sm:w-6 md:w-7" />
      </div>

      {/* Menu */}
      <div className="menu flex items-center justify-center gap-2 text-sm sm:text-base">
        <h1 className="hidden xs:block sm:block">Menu</h1>
        <Menu className="w-6 h-6 sm:w-7 sm:h-7" />
      </div>

    </div>
  )
}

export default Navbar
