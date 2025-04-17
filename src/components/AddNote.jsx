import React, { useState, useContext } from 'react'
import noteContext from '../context/notes/noteContext';

export default function AddNote() {

    const context = useContext(noteContext);                    // using the useContext regarding fetching of all notes
    const {addNote} = context;                                  // destructuring regarding particular context

    // defining a state regarding notes addition
    const [note, setNote] = useState({id : "",title : "", description : "",tag : ""})

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
        setTag(event.target.value)
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

    // Method regarding notes submission
    const submitNote = (event) => {
        event.preventDefault();                                             // preventDefault() method will prevent the page from loading
        addNote(note.title,note.description,note.tag);
        setNote({id : "",title : "", description : "",tag : ""});           // Resetting the notes once submitted by the user
        clearAllEntry();                                                    // Cause above resetting not working in UI I have cleared from here
    }

    return (
        <div className="z-5 addNote xsz:bg-white/70 lg:bg-white/80 xsz:mx-3 xsz:my-3 xl:mx-6 xl:my-6 2xl:my-8 xsz:rounded-md xsz:shadow-md lg:shadow-lg xsz:px-4 xsz:py-3 lg:p-5">

            {/* Main form regarding addition of the notes of the user */}
            <form className = "xsz:space-y-3 md:space-y-4 2xl:space-y-6">

                {/* Adding a Main title for Note's Addition Block */}
                <h1 className = "xsz:text-lg font-merriweather text-secondary/80 md:drop-shadow-md lg:drop-shadow-lg xsz:font-semibold md:text-xl lg:text-2xl 2xl:text-[26px]"> Notes Addition's Section </h1>

                {/* Main title Block */}
                <div className = "flex flex-col xsz:gap-3">
                    <label htmlFor = "title" className = "xsz:text-base font-merriweather xsz:drop-shadow-lg lg:text-lg 2xl:text-xl"> Note's Title </label>
                    <input type="text" placeholder = "Your Note's Title" value = {title} id = "title" name = "title" className = "xsz:bg-secondary/40 xsz:py-2 xsz:px-3 text-white xsz:text-sm lg:text-[15px] 2xl:text-[17px] font-inter xsz:rounded-sm" onChange = {handleTitle} minLength = {5} required/>
                    <p className = "xsz:text-[13px] text-secondary xsz:opacity-45 lg:text-[14px] 2xl:text-base">
                        We usually works with security without sharing your personal data.
                    </p>
                </div>

                {/* Main title Block */}
                <div className = "flex flex-col xsz:gap-3">
                    <label htmlFor = "tag" className = "xsz:text-base font-merriweather xsz:drop-shadow-lg lg:text-lg 2xl:text-xl"> Note's Tag </label>
                    <input type="text" placeholder = "Your Note's Tag" value = {tag} id = "tag" name = "tag" className = "xsz:bg-secondary/40 xsz:py-2 xsz:px-3 text-white xsz:text-sm lg:text-[15px] 2xl:text-[17px] font-inter xsz:rounded-sm" onChange = {handleTag} required/>
                </div>

                {/* Main Note's Data Here */}
                <div className = "flex flex-col xsz:gap-2">
                    <label htmlFor = "description" className = "xsz:text-base font-merriweather xsz:drop-shadow-lg lg:text-lg 2xl:text-xl"> Note's Data </label>
                    <textarea id = "description" name = "description" cols = "30" rows = "4" placeholder = "Your Note's Data here" className = "xsz:bg-secondary/40 xsz:py-2 xsz:px-3 text-white xsz:text-sm lg:text-[15px] 2xl:text-[17px] font-inter xsz:rounded-sm resize-none" value = {data} onChange = {handleData} required minLength = {10}></textarea>
                </div>

                <div className="submissionBlock xsz:space-x-3 sm:space-x-4 2xl:space-x-5">

                    {/* Button for final submission of the Data */}
                    <button type = "submit" disabled = {note.title.length < 5 || note.description.length < 10} className = "xsz:bg-secondary/80 xsz:text-[12px] xsz:font-semibold font-poppins text-white xsz:px-3 xsz:py-1 xsz:rounded-sm active:text-secondary active:bg-primary/80 sm:text-sm lg:text-base 2xl:text-[18px] cursor-pointer shadow-2xl" onClick={submitNote}> Add Note </button>
                    
                    {/* Button for clearing all the data */}
                    <button type = "button" className = "xsz:bg-secondary/80 xsz:text-[12px] xsz:font-semibold font-poppins text-white xsz:px-3 xsz:py-1 xsz:rounded-sm active:text-secondary active:bg-primary/80 sm:text-sm lg:text-base 2xl:text-[18px] cursor-pointer shadow-2xl" onClick = {clearAllEntry}> Clear Note </button>

                </div>
            </form>

        </div>
    )
}