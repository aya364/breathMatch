import React ,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Box  ,Typography ,TextField ,Button} from '@mui/material';
import toast from 'react-hot-toast';
import axios from 'axios';
// import {notifyError ,notifySuccess} from "./../components/Notify"
import Api from "../config/api.js"


import '../css/login-register.css'
//  import '../css/icon-font.min.css'
 
import log from '../images/pva logo1.PNG'
import log1 from '../images/auth/log1.jpg'
import log2 from '../images/auth/log2.jpg'
import log3 from '../images/auth/log3.jpg'
import log4 from '../images/auth/log4.jpg'
import log5 from '../images/auth/log5.jpg'
import log22 from '../images/auth/remov-log2.png'
import nurs from '../images/auth/nurs.png'
import doc from '../images/auth/doc.png'
import logo from '../images/logo.svg'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../vendors/feather/feather.css'
import '../vendors/ti-icons/css/themify-icons.css'
import '../vendors/css/vendor.bundle.base.css'
import '../css/styles.css'

import '../css/theme-default.css'
// import { auto } from "@popperjs/core/index.js";

import 'bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core'; // Import here if needed
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faLock,faEnvelope } from '@fortawesome/free-solid-svg-icons'


// const Register=() =>{
//   const navigate=useNavigate();
//     //state 
//     const [loading,setLoading]=useState(false)
//     const [inputs,setInputs] =useState ({
//       firstName:"",
//       LastName:"",
//       email:"",
//       password:"",
//       // Repassword:""
//     });
//     //handle input change 
//     const handleChange =(e)=>{
//       setInputs((prevState)=>({
//         ...prevState,
//         [e.target.name]:e.target.value
//       }));
//     };
//     //form handle 
//     const handleSubmit=async (e)=>{
//       e.preventDefault();
//       setLoading(true)
//       try {
//          console.log(inputs)
        
//         Api.post("/auth/signup",inputs)
//         .then(()=>{
//           notifySuccess("Account Created !!!!!!")
//           navigate("/login")
//           setLoading(false)
//         })
//         .catch((error)=>{
//           const errMeg = error?.response?.data?.message || error?.response?.data?.error
//           notifyError(errMeg)
//           setLoading(false)

//         })
        

//       }
//       catch(error){
//           console.log(error)
//       }
//     }

const Register=() =>{
  const navigate=useNavigate();
    //state 
    const [loading,setLoading]=useState(false)
    const [inputs,setInputs] =useState ({
      firstName:"",
      LastName:"",
      email:"",
      password:"",
      // Repassword:""
    });
    //handle input change 
    const handleChange =(e)=>{
      setInputs((prevState)=>({
        ...prevState,
        [e.target.name]:e.target.value
      }));
    };
    //form handle 
    const handleSubmit=async (e)=>{
      
      setLoading(true)
      e.preventDefault();
      try {
         console.log(inputs)
        Api.post("/auth/signup",inputs)
        .then(()=>{
          // notifySuccess("Account Created !!!!!!")
          navigate("/login")
          setLoading(false)
        })
        .catch((error)=>{
          const errMeg = error?.response?.data?.message || error?.response?.data?.error
          // notifyError(errMeg)
          setLoading(false)

        })
        

      }
      catch(error){
          console.log(error)
      }
    }



  

  
  return (
    <>

<div style={{backgroundColor:'#EEF5FF'}}>
<div className="login-page" style={{backgroundColor:'#EEF5FF'}}>
        <div className="login-header box-shadow" style={{ position: 'fixed', width: '100%', top: 0, zIndex: 1000 }}>
          <div className="container-fluid d-flex justify-content-between align-items-center">
            <div className="brand-logo">
              <a href="login.html">
                <img src={log} alt="" />
              </a>
            </div>
            <div className="login-menu">
              <ul>
                <li><a href="register.html">Login</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="login-wrap d-flex align-items-center flex-wrap justify-content-center" style={{ paddingTop: '100px' }}>
          <div className="container">
            <div className="row align-items-center" style={{backgroundColor:'#EEF5FF'}}>
              <div className="col-md-6 col-lg-7">
                <img src={log5} alt="" />
              </div>
              <div className="col-md-6 col-lg-5" >
                <div className="login-box bg-white box-shadow border-radius-10">
                  <div className="login-title">
                    <h2 className="text-center text-primary">Registration</h2>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="select-role">
                      <div className="btn-group btn-group-toggle" data-toggle="buttons">
                        <label className="btn active">
                          <input type="radio" name="options" id="admin" />
                          <div className="icon"><img src={doc} className="svg" alt="" /></div>
                          <span>I'm</span>
                          Doctor
                        </label>
                        <label className="btn">
                          <input type="radio" name="options" id="user" />
                          <div className="icon"><img src={nurs} className="svg" alt="" /></div>
                          <span>I'm</span>
                          Nurse
                        </label>
                      </div>
                    </div>

                    <div className="input-group custom">
                      <input type={"email"} className="form-control form-control-lg" placeholder="Email" id="exampleInputEmail1" 
                    value={inputs.email}
                    onChange={handleChange}
                    name='email'
                    required />
                      <div className="input-group-append custom">
                        <span className="input-group-text"><i className="icon-copy dw dw-user1"></i>
                        <FontAwesomeIcon icon={faEnvelope} />
                        </span>
                      </div>
                    </div>


                    <div className="input-group custom">
                      <input className="form-control form-control-lg" placeholder="First Name" id="exampleInputUsername1" 
                    value={inputs.firstName}
                    onChange={handleChange}
                    name='firstName'
                     type={"text"} required />
                      <div className="input-group-append custom">
                        <span className="input-group-text"><i className="icon-copy dw dw-user1"></i>
                        <FontAwesomeIcon icon={faUser} />
                        </span>
                      </div>
                    </div>
                    <div className="input-group custom">
                      <input className="form-control form-control-lg" placeholder="Last Name" id="exampleInputUsername1" 
                    value={inputs.LastName}
                    onChange={handleChange}
                    name='LastName'
                     type={"text"} required />
                      <div className="input-group-append custom">
                        <span className="input-group-text"><i className="icon-copy dw dw-user1"></i>
                        <FontAwesomeIcon icon={faUser} />
                        </span>
                      </div>
                    </div>
                    <div className="input-group custom">
                    {/* <label for="exampleInputPassword1" class="form-label">Password</label> */}
                      <input type="password" className="form-control form-control-lg" placeholder="**********" id="exampleInputPassword1" 
                      value={inputs.password}
                      onChange={handleChange}
                      name='password' 
                      required />
                      <div className="input-group-append custom">
                        <span className="input-group-text"><i className="dw dw-padlock1"></i>
                        <FontAwesomeIcon icon={faLock} />
                        </span>
                        
                      </div>
                    </div>


                    {/* <select class="form-control form-control-lg" id="exampleFormControlSelect2">
                    <option>Country</option>
                    <option>Egypt</option>
                    <option>United States of America</option>
                    <option>United Kingdom</option>
                    <option>India</option>
                    <option>Germany</option>
                    <option>Argentina</option>
                  </select> */}

                    <div className="row pb-30">
                      <div className="col-6">
                        <div className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" id="customCheck1" />
                          <label className="custom-control-label country-label" htmlFor="customCheck1">I agree to all Terms & Conditions</label>
                        </div>
                      </div>
                      {/* <div className="col-6">
                        <div className="forgot-password"><a href="forgot-password.html">Forgot Password</a></div>
                      </div> */}
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="input-group mb-0">
                        <a href='/' className="btn btn-primary btn-block" ><button className="signin-btn" type='submit' onClick={()=>{navigate("/login")}} disabled={loading}>Sign Up</button></a> 
                        {/* <button className="signin-btn btn btn-primary btn-block" type='submit'>Sign Up</button> */}
                        </div>
 
                        <div className="font-16 weight-600 pt-10 pb-10 text-center" data-color="#707373">OR</div>
                        <div className="input-group mb-0">
                        <a className="btn btn-outline-primary  btn-block" href="register.html"><button className="signin-btn regist" type='submit' onClick={()=>{navigate("/login")}} disabled={loading}>Login to your account </button></a>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>















        </div>
      </div>
      </div>
    </>
    )
}
export default Register