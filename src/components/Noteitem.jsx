import React from 'react'

const Noteitem = (props) => {

    const { note } = props;

    return (

        // adding the card for the Notes
        <div className="noteCard bg-secondary/80 xsz:p-3 sm:p-4 xl:space-y-4 xsz:rounded-sm xsz:shadow-md xsz:space-y-3 md:space-y-4 lg:space-y-3">

            {/* Adding the Details of the Card */}
            <h1 className="font-poppins text-primary xsz:font-semibold xsz:text-base"> {note.title} </h1>
            <hr className="text-white" />
            <p className="font-inter xsz:text-sm text-white xsz:font-semibold">
                {note.description}
            </p>

            {/* Creating a Div here for different Options regarding particular operation */}
            <div className="operationalIcons flex flex-row justify-start xsz:gap-4 sm:gap-5 items-center">

                {/* Icon regarding the Deletion of the Note */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-trash3 xsz:w-4 lg:w-5 text-primary cursor-pointer" viewBox="0 0 16 16">
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                </svg>

                {/* Icon regarding addition of the Note */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-pencil-square xsz:w-4 lg:w-5 text-primary cursor-pointer" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                </svg>
            </div>
        </div>
    )
}

export default Noteitem
