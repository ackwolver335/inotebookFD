import React from 'react'
import Logo from '../assets/Logo.png'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <div className = "pageFooter font-roboto flex justify-between items-center xl:mx-6 xsz:mx-2 bg-white/90 fixed xsz:bottom-3 xsz:left-0 xsz:right-0 xsz:rounded-sm xsz:py-1 xsz:px-3 sm:px-4 lg:px-5 xsz:text-sm md:text-base lg:rounded-lg 2xl:text-lg">
      
      {/* Paragraph regarding the Copyright details */}
      <p className = "xsz:font-semibold">
        &#169; 2025 Copyright, Inc
      </p>

      {/* Adding the Icon at the center of the Page */}
      <img src = {Logo} alt = "Main Icon in Footer" className = "xsz:w-16 sm:w-20"/>

      {/* Adding the same list here regarding the navigation to different pages */}
      <ul className = "xsz:font-semibold xsz:space-x-2 2xl:space-x-4">
        <NavLink to = "/" className = "active:text-primary"> Home </NavLink>
        <NavLink to = "/about" className = "active:text-primary"> About </NavLink>
      </ul>

    </div>
  )
}
