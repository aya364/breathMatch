import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, Link, NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { fetchDoctorData, DoctorLogout } from "../redux/reducers/doctors.js";
import CircularProgress from '@mui/material/CircularProgress';
import '../css/mainDash.css';
import logo from '../images/pva logo1.PNG'

import "../css/stylecss.css";
import 'boxicons/css/boxicons.min.css';

const Sidebar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [value, setValue] = useState();
    const isLogin = useSelector((state) => state.doctors.isLogin);
    const doctors = useSelector((state) => state.doctors.data);
  
    useEffect(() => {
      dispatch(fetchDoctorData());
    }, []);
  
    const handleLogout = () => {
      dispatch(DoctorLogout());
      navigate("/");
      toast.success("Logged out successfully");
    };

    
    const [isActive, setIsActive] = useState(false); 

  const toggleSidebar = () => {
    setIsActive(!isActive);
  };

  
  return (
    
    
<nav id="sidebar2" className={`sidebar ${isActive ? '' : 'close'}`}> 
      <header>
        <div className="image-text">
          
        </div>
        <i className={`bx bx-chevron-${isActive ? 'left' : 'right'} toggle`} onClick={toggleSidebar}></i>
      </header>
      <div className="menu-bar">
        <div className="menu">
          <li className="search-box" style={{display:'none'}}>
            
          </li>
          <ul className="menu-links">
            <li className="nav-link">
              <NavLink to="/dashboard">
                <i className="bx bx-home-alt icon"></i>
                <span className="text nav-text">Dashboard</span>
              </NavLink>
            </li>
            <li className="nav-link">
            <NavLink to="/add-patient">
            <i className="bx bx-plus icon"></i>
          <span className="text nav-text">Add Patient</span>
        </NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/upload">
                <i className="bx bx-bar-chart-alt-2 icon"></i>
                <span className="text nav-text">Upload Data</span>
              </NavLink>
            </li>
            
            <li className="nav-link">
            <NavLink to="/patient-list">
            <i className="bx bx-list-ul icon"></i>
          <span className="text nav-text">Patient List</span>
        </NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/historicalData">
                <i className="bx bx-pie-chart-alt icon"></i>
                <span className="text nav-text">Files Archive</span>
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/educational">
                <i className="bx bx-heart icon"></i>
                <span className="text nav-text">Educational Resources</span>
              </NavLink>
            </li>
            
            <li className="nav-link">
              <NavLink to="/reports">
                <i className="bx bx-wallet icon"></i>
                <span className="text nav-text">Reports</span>
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/Chatbot">
              <i className="bx bx-chat icon"></i>
                <span className="text nav-text">Chatbot</span>
              </NavLink>
            </li>
            <div className="bottom-content">
          <li className="">
            <NavLink to="#">
              <i className="bx bx-log-out icon"></i>
              <span className="text nav-text">Logout</span>
            </NavLink>
          </li>
          <li className="mod">
          </li>
        </div>
          </ul>
        </div>
        
      </div>
    </nav>


    
    
  );
};

export default Sidebar;
