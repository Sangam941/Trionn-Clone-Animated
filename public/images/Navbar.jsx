import { Menu } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return ( 
    <div className='bg-transparent flex items-center justify-between py-3 fixed top-0 w-full backdrop-blur-sm z-50 px-32'>
      <div className="logo">
        <img src="/images/trionn_logo.svg" alt="" />
      </div>

      <div className="middle flex items-center justify-center gap-2">
        <img src="/images/sun.svg" alt="" />
        <img src="/images/stats.svg" height={24} width={24} alt="" />
      </div>

      <div className="menu flex items-center justify-center gap-2">
        <h1>Menu</h1>
        <Menu />
      </div>

    </div>
  )
}

export default Navbar
