import React from 'react'
import '../App.css'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/Logo.png'

export default function Navbar() {

  return (
    <nav className="flex bg-gradient-to-l from-secondary to-gray-600 drop-shadow-lg w-full fixed">

      {/* Setting the image of the main logo */}
      <img src={Logo} alt="Main Image Logo Here" className = "xsz:w-28"/>

      {/* Creating a list for the navbar */}
      <ul className = "flex lg:space-x-2 xl:text-[16px]">
        <NavLink to = "/"> Home </NavLink>
        <NavLink to = "/about"> About </NavLink>
      </ul>

    </nav>
  )
}