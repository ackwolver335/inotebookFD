import React, { useState, useContext } from 'react'
import noteContext from '../context/notes/noteContext';

export default function EditNote(props) {

    const context = useContext(noteContext);                    // using the useContext regarding fetching of all notes
    const {addNote} = context;                                  // destructuring regarding particular context

    // defining a state regarding notes addition
    const [note, setNote] = useState({title : "", description : "",tag : ""})

    // definig the useState Hook here for Note's Title
    const[title,setTitle] = useState('');
    const[tag,setTag] = useState('');
    const[data,setData] = useState('');

    // onChange state for Note's Title
    const handleTitle = (event) => {
        setNote({...note,[event.target.name]: event.target.value});
        setTitle(event.target.value);
    }

    // onChange state for Note's Data
    const handleData = (event) => {
        setNote({...note,[event.target.name]: event.target.value});
        setData(event.target.value);
    }

    // onchange state for Note's Tag
    const handleTag = (event) => {
        setNote({...note,[event.target.name]: event.target.value});
        setTag()
    }

    // Method regarding notes submission
    const submitNote = (event) => {
        event.preventDefault();                 // preventDefault() method will prevent the page from loading
        addNote(note.title,note.description,note.tag);
    }

    // using useState Hook here in order to clear the data whenever required from the client side
    const clearAllEntry = () => {
        
        // clearing the note's title
        let newTitle = '';
        setTitle(newTitle);

        // clearing the note's data
        let newData = '';
        setData(newData);

        // clearing the note's tag
        let newTag = '';
        setTag(newTag);
    }

    // Method in order to close the Updation Menu
    const closeUpdation = () => {
        document.querySelector(".editModal").classList.add("-translate-y-[500px]");
        document.querySelector(".editModal").classList.remove("bottom-0");
    }

    // Method for mouseover from the Form Block for 5 seconds it will automatically close
    const formOut = () => {
        setTimeout(() => {
            document.querySelector(".editModal").classList.add("-translate-y-[500px]");
            document.querySelector(".editModal").classList.remove("bottom-0");
        },5000);
    }

    return (
        <div className="editModal fixed bg-secondary/30 top-0 z-20 w-100% left-0 right-0 bottom-0 xsz:py-5 xsz:px-3 flex justify-center items-center ease-out transition-all duration-500">

            {/* Defining a Block regarding the Modal here */}
            <form className="bg-white/90 xsz:py-3 xsz:px-4 xsz:w-90 xsz:rounded-md xsz:shadow-lg xsz:space-y-3" onMouseLeave={formOut}>

                {/* Main Heading and Close Button */}
                <div className="flex flex-row justify-between">
                    <h1 className="font-merriweather xsz:font-semibold text-secondary xsz:text-lg"> Note's Edit Section </h1>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-x-circle-fill xsz:w-6 text-secondary cursor-pointer" viewBox="0 0 16 16" onClick = {closeUpdation}>
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
                    </svg>
                </div>

                <hr className = "text-secondary" />

                {/* Form Elements regarding Updation of the Data */}
                <div className = "flex flex-col xsz:gap-2">
                    <label htmlFor = "title" className = "xsz:text-base font-merriweather xsz:font-semibold"> Note's Title </label>
                    <input type = "text" value = {title} id = "title" name = "title" className = "xsz:bg-secondary/60 xsz:rounded-sm xsz:p-2 text-white font-inter xsz:text-sm" placeholder = "New Note's Title" onChange={handleTitle} required/>
                </div>

                {/* New Tag for the Selected Note */}
                <div className = "flex flex-col xsz:gap-2">
                    <label htmlFor = "tag" className = "xsz:text-base font-merriweather xsz:font-semibold"> Note's Tag </label>
                    <input type = "text" value = {tag} id = "tag" name = "tag" className = "xsz:bg-secondary/60 xsz:rounded-sm xsz:p-2 text-white font-inter xsz:text-sm" placeholder = "New Note's Tag" onChange={handleTag} required/>
                </div>

                {/* New Note's Description regarding Edition */}
                <div className = "flex flex-col xsz:gap-2">
                    <label htmlFor = "description" className = "xsz:text-base font-merriweather xsz:font-semibold"> Note's Data </label>
                    <textarea name = "description" id = "description" cols = "20" rows = "3" placeholder = "New Description regarding Updation" className = "bg-secondary/60 xsz:py-2 xsz:px-3 text-white font-inter xsz:text-sm xsz:rounded-sm resize-none" value = {data} onChange = {handleData} required ></textarea>
                </div>

                {/* Block regarding Submission of the Data */}
                <div className="submissionBlock xsz:space-x-3">

                    {/* Button regarding final data Submission */}
                    <button type = "submit" className = "bg-secondary/80 xsz:text-sm font-poppins font-semibold text-white xsz:py-1 xsz:px-3 xsz:rounded-sm active:text-secondary active:bg-primary cursor-pointer shadow-lg" > Update Note </button>

                    {/* Button regarding clearing all Note's Data */}
                    <button type = "button" className = "bg-secondary/80 xsz:text-sm font-poppins font-semibold text-white xsz:py-1 xsz:px-3 xsz:rounded-sm active:text-secondary active:bg-primary cursor-pointer shadow-lg" onClick = {clearAllEntry} > Clear Note </button>

                </div>

            </form>

        </div>
    )
}
