// importing the required packages
import React, { useState } from "react";
import noteContext from "./noteContext";

// creating a method here
const NoteState = (props) => {

    // link regarding the backend data to be fetched
    const host = "http://localhost:5000";

    // Hardcode regarding sample notes fetching test
    const notesInitial = [];

    // defining the state using useState Hook
    const [notes, setNotes] = useState(notesInitial);

    // defining some methods here
    // 1. Method for adding a note here
    const addNote = async (title,description,tag) => {           // getting the title, description & tag of the Note

        // API Call from the Server
        const response = await fetch(`${host}/api/notes/addnotes`, {
            method: 'POST',                                                         // method in order to retrieve the data from the backend
            headers: {                                                              // regarding the headers that we passed or observed in the Backend
                'Content-type' : 'application/json',
                'auth-token' : localStorage.getItem('token')
            },

            // regarding the body conversion into json format
            body: JSON.stringify({title,description,tag}),
        });

        // Getting the response from the server to be stored
        const json = await response.json();
        setNotes(notes.concat(json));       // pushing the note here
        
    }

    // 2. Method for deleting a note
    const deleteNote = async (id) => {

        // API CALL form the server
        const response = await fetch(`${host}/api/notes/deletenote/${id}`,{
            method : 'DELETE',
            headers: {                                                              // regarding the headers that we passed or observed in the Backend
                'Content-type' : 'application/json',
                'auth-token' : localStorage.getItem('token')
            },
        })

        // providing response to the console
        const json = await response.json();
        console.log(json);

        const newNote = notes.filter((note) => {return note._id !== id});           // creating a new note list after removing the one asked
        setNotes(newNote);                                                          // setting the newNote list as current note list
    }

    // 3. Method for editing a note
    const editNote = async (id,title,description,tag) => {

        // API Calls here
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT',                                                          // method in order to retrieve the data from the backend
            headers: {                                                              // regarding the headers that we passed or observed in the Backend
                'Content-type' : 'application/json',
                'auth-token' : localStorage.getItem('token')
            },

            // regarding the body conversion into json format
            body: JSON.stringify({title,description,tag}),
        });
        
        // Using for loop concept here in order to check specific note that is to be edited
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if(element._id === id){                 // when the id matches we change the title, description and tag of that particular note
                element.title = title;
                element.description = description;
                element.tag = tag;
            }
        }
        
    }

    // 4. Method regarding fetching all notes from the Backend
    const getNotes = async () => {

        // API Call from the Server
        // API Calls here
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',                                                          // method in order to retrieve the data from the backend
            headers: {                                                              // regarding the headers that we passed or observed in the Backend
                'Content-type' : 'application/json',
                'auth-token' : localStorage.getItem('token')
            },
        });

        // getting the response from the server 
        const json = await response.json();
        setNotes(json);

    }

    return (                                                                        // boiler plate code that we always have to include here
        <noteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>    {/* passing those methods here regarding different operations */}
            {props.children}
        </noteContext.Provider>
    )

}


// exporting it outside the file
export default NoteState;