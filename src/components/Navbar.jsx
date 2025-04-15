import React, { useEffect } from 'react'
import '../App.css'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/Logo.png'
import { useLocation } from 'react-router-dom'

export default function Navbar() {

  // using the uselocation hook in order to change the state of navbar elements to be active when needed
  let location = useLocation();

  // using useEffect hook in order to check the location here
  useEffect(() => {
  }, [location])

  // defining a method for toggling the menu bar here
  const showMenu = () => {

    // the default toggle
    document.querySelector('.menuList').classList.toggle('xsz:translate-x-20');

    // if user don't interact for 4 seconds it will automatically disappers
    setTimeout(() => {
      document.querySelector('.menuList').classList.add('xsz:translate-x-20');
    }, 4000);
  }

  return (
    <nav className="z-10 flex backdrop-blur-sm justify-between fixed left-0 right-0 top-0 items-center xsz:px-4 xsz:py-2 xl:px-8 xl:py-2 bg-secondary/60 drop-shadow-lg rounded-b-xl">
      {/* Setting the image of the main logo */}
      <NavLink to="/">
        <img src={Logo} alt="Main Image Logo Here" className="xsz:w-20 sm:w-24 xl:w-[110px] 2xl:w-[120px]" />
      </NavLink>

      {/* Creating a list for the navbar */}
      <ul className="menuList xsz:z-40 sm:z-10 flex sm:space-x-3 lg:space-x-5 sm:text-[16px] md:text-[17px] lg:text-[18px] font-poppins 
        xl:font-medium text-white xsz:flex-col xsz:absolute sm:relative sm:flex-row xsz:top-16 sm:top-0 xsz:bg-secondary/70 sm:bg-transparent 
        xsz:p-3 xsz:space-y-2 xsz:rounded-md xsz:right-2 xsz:translate-x-20 sm:translate-x-0 ease-in duration-200">

        {/* The main navlinks are here */}
        <NavLink to="/" className={`active:text-primary sm:hover:underline sm:hover:underline-offset-4 ${location.pathname === "/" ? "text-primary" : ""}`}> Home </NavLink>
        <NavLink to="/about" className={`active:text-primary sm:hover:underline sm:hover:underline-offset-4 ${location.pathname === "/about" ? "text-primary" : ""}`}> About </NavLink>
      </ul>

      {/* Adding a Bootstrap Icon here for menu */}
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-list w-7 sm:hidden text-primary" viewBox="0 0 16 16" onClick={showMenu}>
        <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
      </svg>

    </nav>
  )
}