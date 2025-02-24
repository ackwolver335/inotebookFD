import React from 'react'

const Noteitem = (props) => {

    const {note} = props;

    return (

        // adding the card for the Notes
        <div className = "noteCard bg-secondary/80 xsz:p-3 sm:p-4 xl:space-y-3                                   xsz:rounded-sm xsz:shadow-md xsz:space-y-2">
            
            {/* Adding the Details of the Card */}
            <h1 className = "font-poppins text-primary xsz:font-semibold xsz:text-base"> {note.title} </h1>
            <hr className = "text-white"/>
            <p className = "font-inter xsz:text-sm text-white xsz:font-semibold">
                {note.description}
            </p>                                                                                                                                                                                                                                                                                                                

        </div>
    )
}

export default Noteitem
