import React from 'react'
import '../App.css'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/Logo.png'

export default function Navbar() {

  // defining a method for toggling the menu bar here
  const showMenu = () => {
    document.querySelector('.menuList').classList.toggle('xsz:translate-x-20')
  }

  return (
    <nav className="flex justify-between fixed w-full items-center xsz:px-4 xsz:py-2 xl:px-8 xl:py-2 bg-secondary/80 drop-shadow-lg rounded-b-xl">
      {/* Setting the image of the main logo */}
      <NavLink to="/">
        <img src={Logo} alt="Main Image Logo Here" className="xsz:w-20 sm:w-24 xl:w-[100px]" />
      </NavLink>

      {/* Creating a list for the navbar */}
      <ul className="menuList flex sm:space-x-3 lg:space-x-5 sm:text-[16px] md:text-[17px] lg:text-[18px] font-poppins 
        xl:font-medium text-white xsz:flex-col xsz:absolute sm:relative sm:flex-row xsz:top-16 sm:top-0 xsz:bg-secondary/70 sm:bg-transparent 
        xsz:p-3 xsz:space-y-2 xsz:rounded-md xsz:right-2 xsz:translate-x-20 sm:translate-x-0 ease-in duration-200">
        <NavLink to="/" className="active:text-primary sm:hover:underline sm:hover:underline-offset-4"> Home </NavLink>
        <NavLink to="/about" className="active:text-primary sm:hover:underline sm:hover:underline-offset-4"> About </NavLink>
      </ul>

      {/* Adding a Bootstrap Icon here for menu */}
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-list w-7 sm:hidden text-primary" viewBox="0 0 16 16" onClick={showMenu}>
        <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
      </svg>

    </nav>
  )
}