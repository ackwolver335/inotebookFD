// importing the required packages
import React, { useState } from "react";
import noteContext from "./noteContext";

// creating a method here
const NoteState = (props) => {

    const s1 = {                         // creating a state here
        "name" : "Ack Wolver",
        "college" : "MSI"
    }

    // using the useState hook in order to setState as per our need
    const [state,setState] = useState(s1);

    // creating a method to set the state as per our need
    const updateState = () => {
        setTimeout(() => {
            setState({
                "name" : "Abhay Chaudhary",
                "college" : "MSIT"
            })
        }, 1000);
    }
    
    return (                                                        // boiler plate code that we always have to include here
        <noteContext.Provider value = {{state,updateState}}>        {/* passing the state and method here regarding state change purpose */}
            {props.children}
        </noteContext.Provider>
    )

}


// exporting it outside the file
export default NoteState;