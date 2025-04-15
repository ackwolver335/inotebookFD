import { createContext } from "react";

// syntax for creating a particular context
const noteContext = createContext();                        // holds the state related to notes in order access the states independent of hierarchy

export default noteContext;                                 // exporting this method or context here