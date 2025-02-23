import React from 'react'
import FirstComp from './FirstComp'
import AddNote from './AddNote'
import YourNote from './YourNote'

export default function Home() {
  return (
    <div className = "xsz:pt-18 lg:pt-20 xl:pt-24 xl:pb-16">
      <FirstComp />
      <AddNote />
      <YourNote />
    </div>
  )
}