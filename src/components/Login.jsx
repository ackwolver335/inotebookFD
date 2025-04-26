import React, {useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import Alert from './Alert';
import alertContext from '../context/alert/alertContext';

export default function Login() {

  // useState for incoming credentials from the client side
  const [credentials,setCredentials] = useState({
    email: "",
    password: ""
  });

  // using context API regarding showAlert() method
  const {showAlert} = useContext(alertContext);

  // using the history with useHistory() hook
  let navigate = useNavigate();

  // specifying starting point
  const host= "http://localhost:5000";

  // onSubmition event for the Form
  const submitData = async (e) => {
    e.preventDefault();

    // using the fetch to retrieve or send the data from the post
    const response = await fetch(`${host}/api/auth/login`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      
      // regarding the body conversion into json format together by defining with the credentials
      body: JSON.stringify({email : credentials.email,password : credentials.password})
    });

    // getting the json details from the Server
    const json = await response.json();

    // temp based conditional block regarding success of credentials
    if(json.success){
      
      // saving the auth-token in our local storage
      localStorage.setItem('token',json.jwtToken);
      navigate("/");

      // using showalert for showing the details of it
      showAlert("User Logged Successfully !","Success","Login");

    } else {
      showAlert("Provided invalid Credentials !","Danger","Not Login");         // in case user have provided wrong credentials
    }
  }

  // onChange state for overall login component
  const onChange = (event) => {
    setCredentials({...credentials,[event.target.name]: event.target.value});
}
  
  return (
    
    // Main Login Block here
    <div className="xsz:py-16 sm:py-18 md:py-20 sm:mx-16 md:mx-24 lg:mx-36 xl:mx-44 2xl:mx-52 xl:py-22">

      {/* Using the alert component here */}
      <Alert />

      {/* Login form */}
      <form className = "xsz:bg-white/80 xsz:my-2 md:my-3 xsz:mx-4 xsz:py-4 xsz:px-3 lg:p-5 xsz:rounded-md lg:space-y-2" onSubmit={submitData}>

        {/* Main Form Heading */}
        <h1 className = "xsz:text-base font-merriweather xsz:font-semibold lg:text-xl"> Provide Credentials for your Account </h1>

        {/* User's Email */}
        <div className="mailBlock flex flex-col xsz:py-3 xsz:space-y-2 lg:space-y-3">
          <label htmlFor = "userMail" className = "font-merriweather xsz:text-sm lg:text-[16px] font-semibold"> Email ID </label>
          <input type = "email" name = "email" id = "userMail" value = {credentials.email} onChange={onChange} className = "font-inter bg-secondary/60 xsz:rounded-sm xsz:text-[12px] text-white xsz:px-2 xsz:py-1 lg:text-sm lg:py-2 lg:px-4" required/>
        </div>

        {/* ID's Password */}
        <div className="passwordBlock flex flex-col xsz:py-3 xsz:space-y-2 lg:space-y-3">
          <label htmlFor = "userPassword" className = "font-merriweather xsz:text-sm lg:text-[16px] font-semibold"> Password </label>
          <input type = "password" name = "password" id = "userPassword" value = {credentials.password} onChange={onChange} className = "font-inter bg-secondary/60 xsz:rounded-sm xsz:text-[12px] text-white xsz:px-2 xsz:py-1 lg:text-sm lg:py-2 lg:px-4" required/>
          
        </div>

        {/* Submit & Data Clear Block */}
        <div className="loginBtn flex flex-row xsz:gap-4">

          <button type = "submit" className = "xsz:bg-secondary/80 xsz:text-[12px] text-white font-poppins xsz:px-3 xsz:py-1 xsz:rounded-sm active:text-secondary active:bg-primary cursor-pointe shadow-2xl lg:text-[15px] lg:py-2 lg:px-3 cursor-pointer"> Login Account </button>

        </div>

      </form>
      
    </div>
  )
}
