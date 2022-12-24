import React, { useState } from "react";
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"


import "./Auth.css";
import icon from "../../assets/logo2.png";
import AboutAuth from './AboutAuth'
import { signup, login  } from "../../action/Auth";




const Auth = () => {

  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleSwitch = () => {
    setIsSignup(!isSignup);
  };

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(!email && !password){
      alert('Enter Your Email and Password')
    }
    if(isSignup){
      if(!name){
        alert('Enter Your Name to Continue')
        
      }
      dispatch(signup({name,email,password},navigate))
      alert(`well come ${name}`)
    }else{
      dispatch(login({email,password},navigate))
    }
  };




  return (
    
      <section className="auth-section">
        {isSignup && <AboutAuth/>}
        <div className="auth-container-2">
          {!isSignup && (
            <img
              src={icon}
              alt="stack overflow"
              className="login-logo"
              width="40"
            />
          )}
          <form onSubmit={handleSubmit}>
            {isSignup && (
              <label>
                <h4>Display Name</h4>
                <input type="text" name="name" id="name" onChange={(e)=>{setName(e.target.value)}}/>
              </label>
            )}
            
            <label>
              <h4>Email</h4>
              <input type="email" name="email" id="email" onChange={(e)=>{setEmail(e.target.value)}}/>
            </label>
           
            <label>
              <div style={{display:"flex", justifyContent:"space-between"}}>
                <h4>Password</h4>
                {!isSignup && <p style={{ color: "#007ac6",fontSize:"13px"}}>forgot password?</p>}
              </div>
              <input type="password" name="password" id="password" onChange={(e)=>{setPassword(e.target.value)}}/>
              {isSignup && (
                <p style={{ fontSize: "13px" }}>
                  Password must contans at least eigth <br />
                  characters, including at least 1 letter and <br />1 number
                </p>
              )}
            </label>
           
            {isSignup && (
                <label>
                  <input type="checkbox" />
                 <p style={{ fontSize: "13px" }}>
                  Otp-in to receive occasional product updates,
                  <br /> user research invitations,
                  <br /> compony announcements,
                  <br /> and digests
                </p>
              </label>
            )}
           
            <button type="submit" className="auth-btn">
              {isSignup ? "Sign up" : "Log in"}
            </button>
           
            {isSignup && (
              <p style={{ color: "#666767", fontSize: "13px" }}>
                By clicking "Sign up", you agree to our
                <span style={{ color: "#007ac6" }}>
                  {" "}
                  term of <br />
                  service
                </span>
                , <span style={{ color: "#007ac6" }}>privacy policy</span> and
                <span style={{ color: "#007ac6" }}>cookie policy</span>
              </p>
            )}
         
          </form>
         
          <p>
            {isSignup ? "Already have an account?" : "Don't have an account?"}
            <button
              type="button"
              className="handle-switch-btn"
              onClick={handleSwitch}
            >
              {isSignup ? "Log in" : "Sign up"}
            </button>
          
          </p>
       
        </div>
      
      </section>
    
  );
};

export default Auth;
