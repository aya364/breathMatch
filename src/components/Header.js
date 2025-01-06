import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { fetchDoctorData, DoctorLogout } from "../redux/reducers/doctors.js";

import '../templateStyle/vendors/css/vendor.bundle.base.css'
import logo from '../images/pva logo1.PNG'
// import logomini from '../images/logoSign.png'
import '../css/header.css'


import { AppBar, Toolbar, Typography, IconButton, Badge, InputBase, Menu, MenuItem } from '@mui/material';
import { Search, Notifications, AccountCircle } from '@mui/icons-material';
const Navbar = () => {
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
  

    //////////////to do list////////////////
    const [todos, setTodos] = useState([]); // Initialize todos state variable

    // Load todos from local storage on component mount
    useEffect(() => {
        const savedTodos = localStorage.getItem("todos");
        if (savedTodos) {
            setTodos(JSON.parse(savedTodos));
        }
    }, []);

    // Save todos to local storage whenever todos state changes
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const [newTodo, setNewTodo] = useState('');
    const [isPanelOpen, setIsPanelOpen] = useState(false);

    const addTodo = (e) => {
        e.preventDefault();
        if (newTodo.trim()) {
            setTodos([...todos, { text: newTodo, completed: false }]);
            setNewTodo('');
        }
    };

    const toggleComplete = (index) => {
        const updatedTodos = todos.map((todo, i) =>
            i === index ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
    };

    const removeTodo = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    };

  
  

    return (
  
      <>
  <nav className="navbar col-lg-12 col-12 p-0 d-flex flex-row">
  <div className="text-center d-flex navbar-brand-wrapper align-items-center justify-content-center">
    <a className="navbar-brand brand-logo mr-5 logodash" href="/dashboard">
      <img src={logo} className="mr-2 mt-lg-2" alt="logo"/>
    </a>
    <a className="navbar-brand brand-logo-mini" href="/dashboard">
      {/* <img src={logomini} alt="logo"/> */}
    </a>
  </div>
  <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
    <ul className="navbar-nav mr-lg-2"></ul>
    <ul className="navbar-nav navbar-nav-right">
      {/* <li className="nav-item dropdown">
        <a className="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#" data-toggle="dropdown">
          <i className="icon-bell mx-0"></i>
          <span className="count"></span>
        </a>
        <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
          <p className="mb-0 font-weight-normal float-left dropdown-header">Notifications</p>
          <a className="dropdown-item preview-item">
            <div className="preview-thumbnail">
              <div className="preview-icon bg-success">
                <i className="ti-info-alt mx-0"></i>
              </div>
            </div>
            <div className="preview-item-content">
              <h6 className="preview-subject font-weight-normal">Application Error</h6>
              <p className="font-weight-light small-text mb-0 text-muted">Just now</p>
            </div>
          </a>
          <a className="dropdown-item preview-item">
            <div className="preview-thumbnail">
              <div className="preview-icon bg-warning">
                <i className="ti-settings mx-0"></i>
              </div>
            </div>
            <div className="preview-item-content">
              <h6 className="preview-subject font-weight-normal">Settings</h6>
              <p className="font-weight-light small-text mb-0 text-muted">Private message</p>
            </div>
          </a>
          <a className="dropdown-item preview-item">
            <div className="preview-thumbnail">
              <div className="preview-icon bg-info">
                <i className="ti-user mx-0"></i>
              </div>
            </div>
            <div className="preview-item-content">
              <h6 className="preview-subject font-weight-normal">New user registration</h6>
              <p className="font-weight-light small-text mb-0 text-muted">2 days ago</p>
            </div>
          </a>
        </div>
      </li> */}
      <li className="nav-item nav-settings">
        <a className="nav-link" href="#" onClick={() => setIsPanelOpen(true)}>
          <i className="icon-ellipsis"></i>
        </a>
      </li>
    </ul>
  </div>
</nav>

<div className={`settings-panel ${isPanelOpen ? 'open' : ''}`}>
  <i className="settings-close ti-close" onClick={() => setIsPanelOpen(false)}></i>
  <ul className="nav nav-tabs border-top" id="setting-panel" role="tablist">
    <li className="nav-item">
      <a className="nav-link active" id="todo-tab" data-toggle="tab" href="#todo-section" role="tab" aria-controls="todo-section" aria-expanded="true">TO DO LIST</a>
    </li>
  </ul>
  <div className="tab-content" id="setting-content">
    <div className="tab-pane fade show active scroll-wrapper" id="todo-section" role="tabpanel" aria-labelledby="todo-section">
      <div className="add-items d-flex px-3 mb-0">
        <form className="form w-100" onSubmit={addTodo}>
          <div className="form-group d-flex">
            <input
              type="text"
              className="form-control todo-list-input"
              placeholder="Add To-do"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
            />
            <button type="submit" className="add btn btn-primary todo-list-add-btn" id="add-task">Add</button>
          </div>
        </form>
      </div>
      <div className="list-wrapper px-3">
        <ul className="d-flex flex-column-reverse todo-list">
          {todos.map((todo, index) => (
            <li key={index} className={todo.completed ? 'completed' : ''}>
              <div className="form-check">
                <label className="form-check-label">
                  <input
                    className="checkbox"
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleComplete(index)}
                  />
                  {todo.text}
                </label>
                <i className="input-helper"></i>
              </div>
              <i className="remove ti-close" onClick={() => removeTodo(index)}></i>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</div>












      

</>
    
    );
  }
  
  export default Navbar;