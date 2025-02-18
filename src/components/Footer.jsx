import React from 'react'
import Logo from '../assets/Logo.png'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <div className = "pageFooter font-roboto flex justify-between items-center xl:mt-2 xl:mx-10">
      
      {/* Paragraph regarding the Copyright details */}
      <p>
        &#169; 2025 Copyright, Inc
      </p>

      {/* Adding the Icon at the center of the Page */}
      <img src = {Logo} alt = "Main Icon in Footer" className = "lg:w-16" />

      {/* Adding the same list here regarding the navigation to different pages */}
      <ul>
        <NavLink to = "/"> Home </NavLink>
        <NavLink to = "/about"> About </NavLink>
      </ul>

    </div>
  )
}
