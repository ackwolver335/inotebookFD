import React, {useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import Alert from './Alert';
import alertContext from '../context/alert/alertContext';

export default function Signup() {

  // setting up the credentials
  const [credentials,setCredentials] = useState({
    name : "",
    username : "",
    email : "",
    password : ""
  });

  // using context API regarding showAlert() method
  const {showAlert} = useContext(alertContext);

  // setting up the navigation key
  let navigate = useNavigate();

  // specifying starting point
  const host= import.meta.env.VITE_REACT_BACKEND_URI;

  const submitData = async (e) => {
    e.preventDefault();             // preventing the default reload from the user's side

    // destructuring the credentials here
    const {name,username,email,password} = credentials;

    // using the fetch to retrieve or send the data from the post
    const response = await fetch(`${host}/api/auth/createuser`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      
      // regarding the body conversion into json format together by defining with the credentials
      body: JSON.stringify({name,username,email,password})
    });

    // getting the json details from the Server
    const json = await response.json();

    // temp based conditional block regarding success of credentials
    if(json.success){
      
      // saving the auth-token in our local storage
      localStorage.setItem('token',json.jwtToken);
      navigate("/about");

      // using showalert for showing the details of it
      showAlert("User Sign Up Successfully !","Success","Sign Up");

    } else {
      showAlert("Provided invalid Credentials !","Danger","Not Login");         // in case user have provided wrong credentials
    }

  };

  // onChange state for overall login component
  const onChange = (event) => {
    setCredentials({...credentials,[event.target.name]: event.target.value});
  }

  return (
    <div className="xsz:py-16 sm:py-18 sm:my-3 xl:my-0 md:py-20 xl:py-22 sm:mx-16 lg:mx-36 xl:mx-44 2xl:mx-52">

      {/* using alert Component for different kinds of Warnings */}
      <Alert />

      {/* Form for new user's creation */}
      <form className="xsz:bg-white/80 xsz:my-2 md:my-3 xsz:mx-4 xsz:py-4 xsz:px-3 lg:p-5 xsz:rounded-md lg:space-y-2" onSubmit={submitData}>

        {/* Heading for new Account's Creation */}
        <h1 className="xsz:text-base font-merriweather xsz:font-semibold lg:text-xl"> Create a New User Account </h1>

        {/* All the Blocks regarding the details of new User's Component */}
        <div className="nameBlock flex flex-col xsz:py-2 xsz:space-y-2 lg:space-y-3">
          <label htmlFor="accountName" className="font-merriweather xsz:text-sm lg:text-[16px] font-semibold"> Full Name </label>
          <input type = "text" name = "name" id = "accountName" value = {credentials.name} onChange={onChange} className = "font-inter bg-secondary/60 xsz:rounded-sm xsz:text-[12px] text-white xsz:px-2 xsz:py-1 lg:text-sm lg:py-2 lg:px-4" required/>
        </div>

        {/* Specific Username regarding Account */}
        <div className="nameBlock flex flex-col xsz:py-2 xsz:space-y-2 lg:space-y-3">
          <label htmlFor="userName" className="font-merriweather xsz:text-sm lg:text-[16px] font-semibold"> Username </label>
          <input type = "text" name = "username" id = "userName" value = {credentials.username} onChange={onChange} className = "font-inter bg-secondary/60 xsz:rounded-sm xsz:text-[12px] text-white xsz:px-2 xsz:py-1 lg:text-sm lg:py-2 lg:px-4" required/>
        </div>

        {/* For User's Email ID */}
        <div className="nameBlock flex flex-col xsz:py-2 xsz:space-y-2 lg:space-y-3">
          <label htmlFor="userEmail" className="font-merriweather xsz:text-sm lg:text-[16px] font-semibold"> Email ID </label>
          <input type = "email" name = "email" id = "userEmail" value = {credentials.email} onChange={onChange} className = "font-inter bg-secondary/60 xsz:rounded-sm xsz:text-[12px] text-white xsz:px-2 xsz:py-1 lg:text-sm lg:py-2 lg:px-4" required/>
        </div>

        {/* For ID's Password */}
        <div className="nameBlock flex flex-col xsz:py-2 xsz:space-y-2 lg:space-y-3">
          <label htmlFor="userPassword" className="font-merriweather xsz:text-sm lg:text-[16px] font-semibold"> Password </label>
          <input type = "password" name = "password" id = "userPassword" value = {credentials.password} onChange={onChange} className = "font-inter bg-secondary/60 xsz:rounded-sm xsz:text-[12px] text-white xsz:px-2 xsz:py-1 lg:text-sm lg:py-2 lg:px-4" required/>
        </div>

        {/* Buttons for Submittion & Reseting the Options */}
        <div className="loginBtn flex flex-row xsz:gap-4 xsz:pt-2 lg:pt-1">

          <button type = "submit" className = "xsz:bg-secondary/80 xsz:text-[12px] text-white font-poppins xsz:px-3 xsz:py-1 xsz:rounded-sm active:text-secondary active:bg-primary cursor-pointe shadow-2xl lg:text-[15px] lg:py-2 lg:px-3 cursor-pointer"> Create Account </button>

        </div>

      </form>

    </div>
  )
}
