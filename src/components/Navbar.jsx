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

  // User's details regarding Login & Sign Up
  const showAccount = () => {

    // general toggle
    document.querySelector('.userAccount').classList.toggle('xsz:translate-x-28');

    // here also if the user didn't interact for 4 sec then this will automatically disappers
    setTimeout(() => {
      document.querySelector('.userAccount').classList.add('xsz:translate-x-28');
    }, 4000);

  }

  // defining a method regarding logout
  const handleLogout = () => {
    localStorage.removeItem('token');
  }

  return (
    <nav className="z-10 flex backdrop-blur-sm justify-between fixed left-0 right-0 top-0 items-center xsz:px-4 xsz:py-2 xl:px-8 xl:py-2 bg-secondary/60 drop-shadow-lg rounded-b-xl">
      {/* Setting the image of the main logo */}
      <NavLink to="/">
        <img src={Logo} alt="Main Image Logo Here" className="xsz:w-20 sm:w-24 xl:w-[110px] 2xl:w-[120px]" />
      </NavLink>

      {/* Creating a list for the navbar */}
      <ul className="menuList items-center xsz:z-40 sm:z-10 flex sm:space-x-3 lg:space-x-5 md:text-[17px] lg:text-[18px] font-poppins 
        xl:font-medium text-white xsz:flex-col xsz:absolute sm:relative sm:flex-row xsz:top-16 sm:top-0 xsz:bg-secondary/70 sm:bg-transparent 
        xsz:p-3 xsz:space-y-2 xsz:rounded-md xsz:right-2 xsz:translate-x-20 sm:translate-x-0 ease-in duration-200 2xl:space-x-7">

        {/* The main navlinks are here */}
        <NavLink to="/home" className={`active:text-primary sm:hover:underline sm:hover:underline-offset-4 ${location.pathname === "/home" ? "text-primary" : ""}`}> Home </NavLink>
        <NavLink to={`${localStorage.getItem('token') ? '/' : '/login'}`} className={`active:text-primary sm:hover:underline sm:hover:underline-offset-4 ${location.pathname === "/" ? "text-primary" : ""}`}> About </NavLink>

        {/* Bootstrap Icon regarding User's Account */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-person-badge sm:w-5 md:w-6 lg:w-7 xsz:hidden sm:block text-white active:text-primary cursor-pointer" viewBox="0 0 16 16" onClick={showAccount}>
          <path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
          <path d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492z" />
        </svg>

      </ul>

      <div className="sideElements flex items-center xsz:gap-2 sm:hidden">

        {/* Bootstrap Icon regarding User's Account */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-person-badge w-5 sm:hidden text-primary" viewBox="0 0 16 16" onClick={showAccount}>
          <path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
          <path d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492z" />
        </svg>

        {/* Adding a Bootstrap Icon here for menu */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-list w-7 sm:hidden text-primary" viewBox="0 0 16 16" onClick={showMenu}>
          <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
        </svg>

      </div>

      {localStorage.getItem('token') ?
        <ul className="userAccount fixed xsz:top-16 right-2 xsz:z-40 flex flex-col items-center font-poppins bg-secondary/70 xsz:p-3 xsz:space-y-2 text-white xsz:rounded-md xsz:translate-x-28 ease-linear duration-200 sm:top-20 lg:font-medium md:text-[17px] lg:text-[18px] xl:top-24">

          {/* Login Components & go through link */}
          <NavLink to="/home" className="active:text-primary" onClick={handleLogout}> Logout </NavLink>

        </ul>

        :

        <ul className="userAccount fixed xsz:top-16 right-2 xsz:z-40 flex flex-col items-center font-poppins bg-secondary/70 xsz:p-3 xsz:space-y-2 text-white xsz:rounded-md xsz:translate-x-28 ease-linear duration-200 sm:top-20 lg:font-medium md:text-[17px] lg:text-[18px] xl:top-24">

          {/* Login Components & go through link */}
          <NavLink to="/login" className="active:text-primary"> Login </NavLink>
          <NavLink to="/signup" className="active:text-primary"> Sign Up </NavLink>

        </ul>
      }

    </nav>
  )
}