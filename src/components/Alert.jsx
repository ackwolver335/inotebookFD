import React from 'react'

export default function Alert(props) {
    return (
        <div className="fixed flex flex-row justify-between xsz:top-20 xsz:left-5 xsz:right-5 bg-white/50 z-10 xsz:p-2 xsz:rounded-md xsz:backdrop-blur-md lg:p-3">
            <p className = "font-inter xsz:font-semibold xsz:text-sm text-secondary lg:text-lg">
                {props.message}
            </p>
        </div>
    )
}
