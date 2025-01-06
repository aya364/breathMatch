import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
// import '../css/mainDash.css';
import { fetchDoctorData, DoctorLogout } from "../redux/reducers/doctors.js";
import vector from '../images/dashboard/6.png';
import '../css/FolderCards.css';
import $ from 'jquery';
import axios from 'axios';
import { WiThermometer } from 'react-icons/wi'; // Weather Icons library
import 'bootstrap/dist/css/bootstrap.min.css'

import { WiDaySunny, WiCloudy, WiRain, WiSnow, WiThunderstorm, WiFog } from 'react-icons/wi';
// import { CircularProgress } from '@material-ui/core';
// import { CircularProgress } from '@mui/icons-material';
import CircularProgress from '@mui/material/CircularProgress';

import 'bootstrap/dist/css/bootstrap.min.css'
import '../vendors/feather/feather.css'
import '../vendors/ti-icons/css/themify-icons.css'
import '../vendors/css/vendor.bundle.base.css'
// import '../css/styles.css'

import '../scss/common/dark/components/loaders/_bar-loader.scss';
import '../scss/common/dark/components/loaders/_circle-loader.scss';
import '../scss/common/dark/components/loaders/_dot-opacity-loader.scss';
import '../scss/common/dark/components/loaders/_flip-square-loader.scss';
import '../scss/common/dark/components/loaders/_glowing-ball.scss';
import '../scss/common/dark/_dashboard.scss';
import '../templateStyle/css/vertical-layout-light/style.css';





async function fetchWeather(city) {
  // Replace with your actual API endpoint URL and API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d26f0f27c5fc948798a0fc0e22b5941b&units=metric`;
  const response = await axios.get(url); // Using axios for request (replace if needed)
  return response.data.main.temp; // Assuming temperature is in 'main.temp' property
}


axios.defaults.baseURL = "http://localhost:4000/";
const MainPanel = ({ loggedInUser }) => {
  
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


    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });


    const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('Bani Suwayf'); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    fetchWeatherData(city)
      .then(data => {
        setWeather(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        setLoading(false);
      });
  }, [city]);

  
  const fetchWeatherData = async (city) => {
    const apiKey = 'd26f0f27c5fc948798a0fc0e22b5941b'; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  };

  
  const renderWeatherIcon = () => {
    if (!weather) return null;
    const { weather: weatherData } = weather;
    if (!weatherData || weatherData.length === 0) return null;

    const weatherCode = weatherData[0].id;
    if (weatherCode >= 200 && weatherCode < 300) {
      return <WiThunderstorm className="weather-icon" />;
    } else if (weatherCode >= 300 && weatherCode < 400) {
      return <WiRain className="weather-icon" />;
    } else if (weatherCode >= 500 && weatherCode < 600) {
      return <WiRain className="weather-icon" />;
    } else if (weatherCode >= 600 && weatherCode < 700) {
      return <WiSnow className="weather-icon" />;
    } else if (weatherCode >= 700 && weatherCode < 800) {
      return <WiFog className="weather-icon" />;
    } else if (weatherCode === 800) {
      return <WiDaySunny className="weather-icon" />;
    } else {
      return <WiCloudy className="weather-icon" />;
    }
  };




  const [userName, setUserName] = useState('');

  useEffect(() => {
    if (loggedInUser) {
      setUserName(loggedInUser.name || loggedInUser.username || 'User'); 
    }
  }, [loggedInUser]);


//////////////////////card/////////////


const [cards, setCards] = useState([]); // Use plural for consistency

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('/api/cards'); // Use the correct endpoint
      setCards(response.data.data);
    } catch (err) {
      console.error(err);
      // Handle errors gracefully, e.g., display an error message to the user
    }
  };

  fetchData();
}, []); // Fetch data on component mount

///////////////////////////////////
function calculatePercentageChange(currentValue, previousValue) {
  const percentageChange = ((currentValue - previousValue) / previousValue) * 100;
  return percentageChange.toFixed(2); // Return percentage change rounded to 2 decimal places
}
  
    







  return (
    <div className="main-panel">
      <div className="content-wrapper">
        <div className="row">
          <div className="col-md-12 grid-margin">
            <div className="row">
              <div className="col-12 col-xl-8 mb-4 mb-xl-0">
              <h3 className="font-weight-bold">Welcome to PVA detection system</h3>
                <h6 className="font-weight-normal mb-0">
                PVA Monitoring System! Your system is running optimally.{" "}
                </h6>
              </div>
              

              <div className="col-12 col-xl-4">
      <div className="justify-content-end d-flex">
        <div className="dropdown flex-md-grow-1 flex-xl-grow-0">
          <button
            className="btn btn-sm btn-light bg-white dropdown-toggle"
            type="button"
            id="dropdownMenuDate2"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="true"
          >
            <i className="mdi mdi-calendar"></i> {formattedDate}
          </button>
        
        </div>
      </div>
    </div>


            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card tale-bg">
              <div className="card-people mt-auto"  >
                <img src={vector} alt="people"  />
                

<div className="weather-info">
      <div className="d-flex">
        <div>{loading ? <CircularProgress /> : renderWeatherIcon()}</div>
        <div className="ml-2">
          <h2 className="mb-0 font-weight-normal" style={{color:'#007bff'}}>
            {loading ? 'Loading...' : (weather ? `${Math.round(weather.main.temp)}°C`: 'N/A')}
          </h2>
          <h4 className="location font-weight-normal">{city}</h4>
          <h6 className="font-weight-normal">Egypt</h6>
        </div>
      </div>
    </div>

              </div>
            </div>
          </div>


         <div className="col-md-6 grid-margin transparent">
  <div className="row">
    <div className="col-md-6 mb-4 stretch-card transparent">
      <div className="card card-tale">
      <div className="card-body">
      <span className="pric"></span>
      <p className="mb-4">ICU Patients</p>
      {cards.map((card) => (
  <div key={card._id}>
    <p className="fs-30 mb-2">{card.ICU_patients}</p>

  </div>
))}
    </div>
      </div>
    </div>
    <div className="col-md-6 mb-4 stretch-card transparent">
      <div className="card card-dark-blue">
        <div className="card-body">
          <p className="mb-4">Report's Number</p>
          {cards.map((card) => (
        <p key={card._id} className="fs-30 mb-2"> 4</p>
      ))}
          {/* <p>22.00% (30 days)</p> */}
        </div>
      </div>
    </div> 
  </div> 
  <div className="row">
    <div className="col-md-6 mb-4 mb-lg-0 stretch-card transparent">
      <div className="card card-light-blue">
        <div className="card-body">
          <p className="mb-4">Available Beds</p>
          {cards.map((card) => (
        <p key={card._id} className="fs-30 mb-2"> {card.Available_Beds}</p>
      ))}
          {/* <p>2.00% (30 days)</p> */}
        </div>
      </div>
    </div>
    <div className="col-md-6 stretch-card transparent">
      <div className="card card-light-danger">
        <div className="card-body">
          <p className="mb-4">Number of Patients Treated</p>
          {cards.map((card) => (
        <p key={card._id} className="fs-30 mb-2"> {card.Patients_Treated}</p>
      ))}         
       {/* <p>0.22% (30 days)</p> */}
     
        </div>
      </div>
    </div>
  </div>
</div>




   


  










        </div>
      </div>
    </div>




    
  );
};

export default MainPanel;