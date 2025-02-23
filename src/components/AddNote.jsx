import React, { useState } from 'react'

export default function AddNote() {

    // definig the useState Hook here for Note's Title
    const[title,setTitle] = useState('');
    const[data,setData] = useState('');

    // onChange state for Note's Title
    const handleTitle = (event) => {
        setTitle(event.target.value);
    }

    // onChange state for Note's Data
    const handleData = (event) => {
        setData(event.target.value);
    }

    // using useState Hook here in order to clear the data whenever required from the client side
    const clearAllEntry = () => {
        
        // clearing the note's title
        let newTitle = '';
        setTitle(newTitle);

        // clearing the note's data
        let newData = '';
        setData(newData);
    }

    return (
        <div className="addNote xsz:bg-white/70 lg:bg-white/80 xsz:mx-3 xsz:my-3 xl:mx-6 xl:my-6 2xl:my-8 xsz:rounded-md xsz:shadow-md lg:shadow-lg xsz:px-4 xsz:py-3 lg:p-5">

            {/* Main form regarding addition of the notes of the user */}
            <form className = "xsz:space-y-3 md:space-y-4 2xl:space-y-6">

                {/* Adding a Main title for Note's Addition Block */}
                <h1 className = "xsz:text-lg font-merriweather text-secondary/80 md:drop-shadow-md lg:drop-shadow-lg xsz:font-semibold md:text-xl lg:text-2xl 2xl:text-[26px]"> Notes Addition's Section </h1>

                {/* Main title Block */}
                <div className = "flex flex-col xsz:gap-3">
                    <label htmlFor = "noteTitle" className = "xsz:text-base font-merriweather xsz:drop-shadow-lg lg:text-lg 2xl:text-xl"> Note's Title </label>
                    <input type="text" placeholder = "Your Note's Title" value = {title} id = "noteTitle" className = "xsz:bg-secondary/40 xsz:py-2 xsz:px-3 text-white xsz:text-sm lg:text-[15px] 2xl:text-[17px] font-inter xsz:rounded-sm" onChange = {handleTitle}/>
                    <p className = "xsz:text-[13px] text-secondary xsz:opacity-45 lg:text-[14px] 2xl:text-base">
                        We usually works with security without sharing your personal data.
                    </p>
                </div>

                {/* Main Note's Data Here */}
                <div className = "flex flex-col xsz:gap-2">
                    <label htmlFor = "noteData" className = "xsz:text-base font-merriweather xsz:drop-shadow-lg lg:text-lg 2xl:text-xl"> Note's Data </label>
                    <textarea name="" id = "noteData" cols = "30" rows = "4" placeholder = "Your Note's Data here" className = "xsz:bg-secondary/40 xsz:py-2 xsz:px-3 text-white xsz:text-sm lg:text-[15px] 2xl:text-[17px] font-inter xsz:rounded-sm resize-none" value = {data} onChange = {handleData}></textarea>
                </div>

                <div className="submissionBlock xsz:space-x-3 sm:space-x-4 2xl:space-x-5">

                    {/* Button for final submission of the Data */}
                    <button type = "submit" className = "xsz:bg-secondary/80 xsz:text-[12px] xsz:font-semibold font-poppins text-white xsz:px-3 xsz:py-1 xsz:rounded-sm active:text-secondary active:bg-primary/80 sm:text-sm lg:text-base 2xl:text-[18px] cursor-pointer shadow-2xl"> Submit Note </button>
                    
                    {/* Button for clearing all the data */}
                    <button type = "button" className = "xsz:bg-secondary/80 xsz:text-[12px] xsz:font-semibold font-poppins text-white xsz:px-3 xsz:py-1 xsz:rounded-sm active:text-secondary active:bg-primary/80 sm:text-sm lg:text-base 2xl:text-[18px] cursor-pointer shadow-2xl" onClick = {clearAllEntry}> Clear Note </button>

                </div>
            </form>

        </div>
    )
}