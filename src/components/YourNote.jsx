import React, { useContext, useEffect, useState } from 'react'
import noteContext from '../context/notes/noteContext';
import Noteitem from './Noteitem';
import EditNote from './EditNote';

export default function YourNote() {

  const context = useContext(noteContext);                 // using the useContext regarding fetching of all notes
  const { notes, getNotes } = context;                        // destructuring regarding particular context

  // regarding modal visibility
  const [selectedNote, setSelectedNote] = useState(null);
  
  // defining a state regarding notes addition
  const [note, setNote] = useState({title : "", description : "",tag : ""})

  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  },[]);

  // defining the update note method here
  const updateNote = (note) => {
    setSelectedNote(note);                                                              // Set the selected note
    document.querySelector(".editModal").classList.remove("-translate-y-[500px]");
    document.querySelector(".editModal").classList.add("bottom-0");
    setNote(note);                                                                      // Pass the note to EditNote
  }

  return (
    <>

      {/* Adding the Modal here regarding Editing the Note */}
      <EditNote note = {selectedNote} setSelectedNote = {setSelectedNote} />

      <div className="z-5 userNotes xsz:space-y-2 lg:space-y-3 bg-white/80 xsz:mx-3 xsz:my-3 xsz:rounded-md xsz:shadow-md xsz:py-3 xsz:px-4 xl:mx-6">

        <h1 className="font-merriweather xsz:font-semibold text-secondary/80 md:drop-shadow-md lg:drop-shadow-lg xsz:text-lg md:text-xl lg:text-2xl 2xl:text-[26px]"> Your Notes </h1>
        <div className="notesBlock grid xsz:grid-flow-row xsz:space-y-3 sm:grid-flow-col sm:gap-4 xl:gap-5 sm:grid-rows-4 md:grid-rows-2 lg:grid-rows-3 xl:grid-rows-2 2xl:grid-rows-2">
          {notes.map((note) => {
            return <Noteitem key={note._id} note={note} updateNote = {updateNote} />        // passing the note as props
          })}
        </div>

      </div>
    </>
  )
}
