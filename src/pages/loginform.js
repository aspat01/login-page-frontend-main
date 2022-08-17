import logo from "./images/logo.png";
import Preloader from "./videos/Preloader.mp4";
import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
//import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import usePasswordToggle from "./hooks/usePaswwordToggle";
//import Signupform from "./Signupform";
//import './src/App.css';

const Loginform = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [allEntry, setAllEntry] = useState([]);

  const [PasswordInputType, ToggleIcon] = usePasswordToggle();
  const submitForm = () => {
    if (email && password) {
      const newEntry = { email: email, password: password };
      setAllEntry([...allEntry, newEntry]);

      setEmail("");
      setPassword("");
    } else {
      alert("please fill the data");
    }
  };
  return (
    <div className="main">
      <video autoPlay muted loop>
        <source src={Preloader} type="video/mp4" />
        
      </video>
      <div className="sub-main">
        <div>
          <div className="img">
            <div className="container-image">
              <img src={logo} alt="logo of Skillur" className="Profile" />
            </div>
          </div>
          <form action="" onSubmit={submitForm}>
            <div>
              <h5> Email</h5>
              <input type="text" placeholder="Enter your email here" id="email" autoComplete="off" value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="name"/>
            </div>
            <div>
              <h5>Password</h5>
              <input type={PasswordInputType} placeholder="Enter your password" id="password" autoComplete="off" value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="name"/>
              <span className="password-toggle-icon">{ToggleIcon}</span>
            </div>
            <div>
              <p>
                <a href="#">Forgot Password ?</a>
              </p>
            </div>
            <div>
              <button type="submit" value="submit">
                Login
              </button>
            </div>
            <div className="para">
              <p>
                Don't have an account ? <Link to="/signup">Sign-up</Link>
              </p>
              
            </div>
            
          </form>
          
        </div>
      </div>
      <Outlet />
    </div>
          

  );
};

export default Loginform;
