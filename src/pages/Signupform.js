import React, { useState } from "react";
import validation from "./validation/signupValidation";
import profileVideo from "./videos/profileVideo.mp4";
import {  Link } from "react-router-dom";
//import signupValidation from "./validation/signupValidation";

const Signinform = () => {
const [values, setValues] = useState({
  fullname :"",
  email :"",
  password :"",
});

const [errors, setErrors] = useState({});
//const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (event) =>{
    setValues({
        ...values,
        [event.target.name] : event.target.value,
    });
  };

    const createAccount = (event) => {
        event.preventDefault();
        console.log('before validation');
        setErrors(validation(values));
        console.log('after validation');
       
    }; 
    console.log('create button');
    return (
      <div className="container1">
        <video className="video1" autoPlay muted>
        <source src={profileVideo} type="video/mp4" />
        </video>
        <div className="app-wrapper"> 
        <div> 
            <h1 className ="title" >Create new account</h1>
        </div>
            <form className="form-wrapper">
            <div className="Name">
                    <label className="label">Full Name</label>
                    <div>
                    <input type= "text" name ="fullname" placeholder="Enter your name here" className="input" value = {values.fullname} onChange = {handleChange}/>
                    {errors.fullname && <p className="error"> {errors.fullname}</p>}
                    </div>
                </div>
                <div className="email">
                    <label className="label">Email</label>
                    <div>
                    <input type ="email" name ="email" placeholder="Enter your email here" className="input" value = {values.email} onChange ={handleChange}/>
                    {errors.email && <p className="error"> {errors.email}</p>}
                    </div>
                </div>
               <div className="password">
                    <label className="label">Password</label>
                    <div>
                    <input type= "password" name= "password" placeholder ="Enter your password here" className="input" values = {values.password} onChange = {handleChange}/>
                    <p className="passWord"> Password should contain atleast 12 character, one Uppercase, one Lowercase, one Number and one Special character.</p>
                    {errors.password && <p className="error"> {errors.password}</p>}
                    </div>
                </div>
                <div>
            <button className="create-account" onClick={createAccount}>Create Account</button>   
            </div>
            <div className="last-line">
              <p> Already have an account ?<Link to="/">Login</Link></p>
              
            </div>
            </form>
      </div>
      </div>
    );
  };
  
  export default Signinform;