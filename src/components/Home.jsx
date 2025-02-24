import React from 'react'
import FirstComp from './FirstComp'
import AddNote from './AddNote'
import YourNote from './YourNote'

export default function Home() {
  return (
    <div className = "xsz:py-16 sm:py-18 md:py-20 xl:py-22">
      <FirstComp />
      <AddNote />
      <YourNote />
    </div>
  )
}