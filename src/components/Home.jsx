import React from 'react'
import FirstComp from './FirstComp'
import AddNote from './AddNote'
import YourNote from './YourNote'
import Alert from './Alert'

export default function Home() {
  return (
    <div className = "xsz:py-16 sm:py-18 md:py-20 xl:py-22">

      {/* Adding an alert component here regarding different alerts */}
      <Alert message = "This is an alert message" />

      <FirstComp />
      <AddNote />
      <YourNote />
    </div>
  )
}