import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';
import Noteitem from './Noteitem';

export default function YourNote() {

  const context = useContext(noteContext);                 // using the useContext regarding fetching of all notes
  const { notes } = context;                        // destructuring regarding particular context

  return (
    <>
      <div className="userNotes xsz:space-y-2 lg:space-y-3 bg-white/80 xsz:mx-3 xsz:my-3 xsz:rounded-md xsz:shadow-md xsz:py-3 xsz:px-4 xl:mx-6">

        <h1 className="font-merriweather xsz:font-semibold text-secondary/80 md:drop-shadow-md lg:drop-shadow-lg xsz:text-lg md:text-xl lg:text-2xl 2xl:text-[26px]"> Your Notes </h1>
        <div className="notesBlock grid xsz:grid-flow-row xsz:space-y-3 sm:grid-flow-col sm:gap-4 xl:gap-5 sm:grid-rows-4 md:grid-rows-2 lg:grid-rows-3 xl:grid-rows-4 2xl:grid-rows-2">
          {notes.map((note) => {
            return <Noteitem key={note._id} note={note} />        // passing the note as props
          })}
        </div>

      </div>
    </>
  )
}
