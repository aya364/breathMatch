import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { fetchDoctorData, DoctorLogout } from "../redux/reducers/doctors.js";
import '../templateStyle/vendors/css/vendor.bundle.base.css'

import '../css/mainDash.css';

import axios from 'axios';
import { WiThermometer } from 'react-icons/wi'; // Weather Icons library
import 'bootstrap/dist/css/bootstrap.min.css'


import 'bootstrap/dist/css/bootstrap.min.css'

import '../vendors/ti-icons/css/themify-icons.css'

import Navbar from "../components/Header";
import SettingsPanel from "../components/settingPanel";
import Sidebar from "../components/sidebar";
import MainPanel from "../components/mainPanel";
import { Height } from "@mui/icons-material";


const Dashboardmain = ({loggedInUser}) =>{


  return (
    <>

<Navbar/> 
<SettingsPanel />
  <div className="app-container" style={{backgroundColor:'#F5F7FF'}} >
      <Sidebar />
      <MainPanel />
    </div>

    {/* style={{backgroundColor:'#F5F7FF'}} */}
    

    </>
  )

}
export default Dashboardmain