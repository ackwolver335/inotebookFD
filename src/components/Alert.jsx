import React, {useContext} from 'react'
import alertContext from '../context/alert/alertContext';

export default function Alert() {

    // defining the value of context here
    const {alert} = useContext(alertContext);

    return (
        <div className={`fixed ${alert.message == "" ? 'hidden' : 'flex'} flex-row justify-between xsz:top-20 xl:top-24 xsz:left-5 xsz:right-5 z-1 xsz:p-2 xsz:rounded-md xsz:backdrop-blur-md lg:p-3 ${alert.state == 'Success' ? 'bg-green-300/80' : 'bg-red-300/80'} `}>
            <p className = "font-inter xsz:font-semibold xsz:text-sm text-secondary lg:text-lg">
                {alert.message}
            </p>
        </div>
    )
}
