import React, {useState} from "react";
import alertContext from './alertContext'

// defining the alert state here
const AlertState = (props) => {

    // useState for the alert component
    const [alert,setAlert] = useState({
        message : "",
        state : "",
        type : ""
    });

    // defining the method for alert
    const showAlert = (msg,state,type) => {
        setAlert({message : msg,state : state,type : type});              // setting the initial value of alert
        setTimeout(() =>{
            setAlert({
                message : "",
                state : "",
            });
        },3000);                                            // timer of 3 seconds
    };

    return (
        <alertContext.Provider value = {{alert, showAlert}}>
            {props.children}
        </alertContext.Provider>
    )

}

export default AlertState