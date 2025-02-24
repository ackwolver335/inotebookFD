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
            "_id": "67bab0073f361e5d94162b1a",
            "user": "67a4ffb4aca89731aff8ef21",
            "title": "My Schedule for Getting",
            "description": "This is a general day description here for some of my friends.",
            "tag": "Happy",
            "date": "2025-02-23T05:20:07.186Z",
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
            "_id": "67bab0073f361e5d94162b1a",
            "user": "67a4ffb4aca89731aff8ef21",
            "title": "My Schedule for Getting",
            "description": "This is a general day description here for some of my friends.",
            "tag": "Happy",
            "date": "2025-02-23T05:20:07.186Z",
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
            "_id": "67bab0073f361e5d94162b1a",
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

    return (                                                        // boiler plate code that we always have to include here
        <noteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </noteContext.Provider>
    )

}


// exporting it outside the file
export default NoteState;