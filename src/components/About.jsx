import React, { useContext, useEffect } from 'react'
import noteContext from '../context/notes/noteContext'

export default function About() {

  // using the context here
  const a = useContext(noteContext);

  // using the useEffect Hook here
  useEffect(() => {
    a.updateState();
    // eslint-disable next line
  },[])

  return (
    <div className = "lg:pt-24 lg:px-4 font-inter">
      This is about {a.state.name} and he is in {a.state.college}
    </div>
  )
}
