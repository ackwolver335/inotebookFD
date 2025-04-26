import React, {useActionState, useContext} from 'react'
import AddNote from './AddNote'
import YourNote from './YourNote'
import Alert from './Alert'
import alertContext from '../context/alert/alertContext'

export default function Home() {

  return (
    <div className = "xsz:py-16 sm:py-18 md:py-20 xl:py-22">
      
      <AddNote />
      <YourNote />
    </div>
  )
}