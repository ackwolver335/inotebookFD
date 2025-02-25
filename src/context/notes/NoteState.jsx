// importing the required packages
import React, { useState } from "react";
import noteContext from "./noteContext";

// creating a method here
const NoteState = (props) => {

    // Hardcode regarding sample notes fetching test
    const notesInitial = [
        {
            "_id": "67a5bea4912a6c89cf3fa149",
            "user": "67a4ffb4aca89731aff8ef21",
            "title": "My Schedule for Today",
            "description": "This is a general day description here for some of my friends.",
            "tag": "Happy",
            "date": "2025-02-07T08:04:52.265Z",
            "__v": 0
        },
        {
            "_id": "67bab0073f361e5d94162b1a",
            "user": "67a4ffb4aca89731aff8ef21",
            "title": "My Schedule for Getting",
            "description": "This is a general day description here for some of my friends.",
            "tag": "Happy",
            "date": "2025-02-23T05:20:07.186Z",
            "__v": 0
        },
        {
            "_id": "67bab0073f361e5d94562b1a",
            "user": "67a4ffb4aca89731aff8ef21",
            "title": "My Schedule for Getting",
            "description": "This is a general day description here for some of my friends.",
            "tag": "Happy",
            "date": "2025-02-23T05:20:07.186Z",
            "__v": 0
        },
        {
            "_id": "67bab0073f361e5d44162b1a",
            "user": "67a4ffb4aca89731aff8ef21",
            "title": "My Schedule for Getting",
            "description": "This is a general day description here for some of my friends.",
            "tag": "Happy",
            "date": "2025-02-23T05:20:07.186Z",
            "__v": 0
        },
        {
            "_id": "67bab0073f361e4d94162b1a",
            "user": "67a4ffb4aca89731aff8ef21",
            "title": "My Schedule for Getting",
            "description": "This is a general day description here for some of my friends.",
            "tag": "Happy",
            "date": "2025-02-23T05:20:07.186Z",
            "__v": 0
        },
        {
            "_id": "67bab0073f361e5d90162b1a",
            "user": "67a4ffb4aca89731aff8ef21",
            "title": "My Schedule for Getting",
            "description": "This is a general day description here for some of my friends.",
            "tag": "Happy",
            "date": "2025-02-23T05:20:07.186Z",
            "__v": 0
        },
        {
            "_id": "67bab0073f363e5d94162b1a",
            "user": "67a4ffb4aca89731aff8ef21",
            "title": "My Schedule for Getting",
            "description": "This is a general day description here for some of my friends.",
            "tag": "Happy",
            "date": "2025-02-23T05:20:07.186Z",
            "__v": 0
        }
    ]

    // defining the state using useState Hook
    const [notes, setNotes] = useState(notesInitial);

    // defining some methods here
    // 1. Method for adding a note here
    const addNote = (title,description,tag) => {           // getting the title, description & tag of the Note
        
        const note = {
            "_id": "67bab0073f363e5d94165b1a",
            "user": "67a4ffb4aca89731aff8ef21",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2025-02-23T05:20:07.186Z",
            "__v": 0
        };                                  // specifying null will be updated further : API CALL
        
        setNotes(notes.concat(note));       // pushing the note here
    }

    // 2. Method for deleting a note
    const deleteNote = (id) => {

        // API CALL : To be Added

        const newNote = notes.filter((note) => {return note._id !== id});           // creating a new note list after removing the one asked
        setNotes(newNote);                                                          // setting the newNote list as current note list
    }

    // 3. Method for editing a note
    const editNote = (id,title,description,tag) => {
        
    }

    return (                                                                        // boiler plate code that we always have to include here
        <noteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>    {/* passing those methods here regarding different operations */}
            {props.children}
        </noteContext.Provider>
    )

}


// exporting it outside the file
export default NoteState;