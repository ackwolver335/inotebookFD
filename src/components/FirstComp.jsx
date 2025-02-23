 import React from 'react'
import SideImage from '../assets/SideImage.png';

export default function FirstComp() {
  return (
    <div className = "flex sm:flex-row sm:justify-evenly md:justify-around lg:justify-between xl:justify-around items-center xsz:mx-3 xsz:my-2 xsz:rounded-md xsz:py-3 xsz:px-4 xsz:shadow-lg xsz:bg-white/80 sm:bg-white/60 lg:bg-white/70 sm:py-4 sm:px-1 lg:px-10 xl:py-1 xl:mx-6 2xl:my-7">
      
      {/* First Block main Content */}
      <div className="contentBlock sm:bg-secondary/50 xsz:space-y-3 sm:w-2/4 sm:py-4 sm:px-3 sm:rounded-md sm:shadow-lg md:space-y-5 md:px-5 xl:w-2/4 xl:py-6 xl:px-8 xl:shadow-xl 2xl:space-y-7 2xl:px-7">

        <h1 className = "font-merriweather xsz:font-semibold drop-shadow-lg xsz:text-xl sm:text-white md:text-2xl lg:text-3xl xl:text-4xl"> InoteBook Store </h1>
        <p className = "font-inter xsz:text-sm sm:text-white sm:font-semibold sm:drop-shadow-lg md:text-base lg:text-lg 2xl:text-[22px]">
          Save, access, and organize notes effortlessly—your free, secure, and seamless cloud-based note-saving solution for ultimate productivity! 🚀
        </p>

        {/* Button regarding mark over to the Notes creation Block */}
        <button type = "button" className = "xsz:rounded-md xsz:text-[12px] font-poppins xsz:font-semibold xsz:py-1 xsz:px-3 text-white bg-secondary/80 cursor-pointer sm:rounded-sm md:text-base lg:text-lg lg:px-4 lg:py-2 lg:border-none lg:bg-secondary/90 lg:text-primary 2xl:text-xl 2xl:px-5 2xl:py-3 2xl:rounded-lg"> 
          Get Started
        </button>
        
      </div>

      {/* Image Block regarding aside interaction */}
      <img src = {SideImage} alt = "Side Image for Main Block"  className = "xsz:hidden sm:block sm:w-52 md:w-60 lg:w-72 xl:w-90"/>

    </div>
  )
}
