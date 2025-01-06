// import './App.css';
// import Header from "./components/Header";
// import SettingsPanel from "./components/settingPanel";
// import Sidebar from "./components/sidebar";
// import MainPanel from "./components/mainPanel";
// import UploadForm from './components/UploadForm';

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import axios from 'axios';


// import Patients from "./pages/Patients";
// import Login  from "./pages/Login";
// import { ToastContainer } from 'react-toastify';
// import DoctorsPatient from './pages/DoctorsPatient';
// import PatientDetails from './pages/PatientDetails';
// import CreatePatients from './pages/CreatePatients';
// import Showpatient from './pages/Showpatient'
// import Register from './pages/Register';



// import 'react-toastify/dist/ReactToastify.css';
// import { useSelector,useDispatch } from 'react-redux';


// import {fetchDoctorData  } from "./redux/reducers/doctors"
// import Box from '@mui/material/Box';

// import React, { useState, useEffect } from 'react';
// // import React from 'react';
// import PreLoading from './components/PreLoading';
// import Dashboardmain from './pages/Dashboard';
// import '../src/index.css'
// // import './../node_modules/bootstrap/dist/css/bootstrap.min.css'

// import PatientList from './pages/PatientList';
// // import EducationalResources from './pages/EducationalResources';
// // import Articles from './pages/Articles';
// // import Videos from './pages/Videos';
// // import ImageGallery from './pages/ImageGallery';
// import { Dashboard } from '@mui/icons-material';

// const today = new Date();
// const formattedDate = today.toLocaleDateString('en-US', {
//   weekday: 'long',
//   day: 'numeric',
//   month: 'long',
//   year: 'numeric'
// });



// function App() {

//     const isLogin=useSelector((state)=>state.doctors.isLogin)
//     const user=useSelector((state)=>state.doctors.data)
//     const dispatch=useDispatch();




//     useEffect(()=>{
//       dispatch(fetchDoctorData())
//     },[])

    
//   return (

//      <>
//       {/* <Login /> */}
//       {/* <Register /> */}
//       {/* <Header/> */}
//       {/* <SettingsPanel /> */}
//       <ToastContainer/>
//       <PreLoading />
//       {/* <div>
//         <UploadForm />
//       </div> */}
    
//       {/* <div className="app-container" style={{backgroundColor:'#F5F7FF'}}>
//       <Sidebar />
//       <MainPanel />
//     </div> */}

//     {/* <Dashboardmain /> */}
//     {/* <Patients/> */}
    

//     {/* <PatientList />  */}
   

      
   
//       <Routes>
//           {/* <Route path='/' element={<Patients/>}/> */}
//           {/* <Route path='/' element={<Register/>}/> */}

//           { isLogin && user.isAdime && <Route path='/patients' element={<Patients/>}/>}
//           { isLogin && <Route path='/my-patient' element={<DoctorsPatient/>}/>}
//           {   isLogin && <Route path='/patient-details/:id' element={<PatientDetails/>}/>}
//            {/* {isLogin && <Route path='/create-patient' element={<CreatePatients/>}/>} */}
//            <Route path='/showpatient' element={<Showpatient/>}></Route>

//           {/* <Route path='/register' element={<Register/>}/> */}
//           {/* <Route path='/register' element={<Register/>}/> */}
//           <Route path='*' element={<Patients/>}/>

         
        
      
          
//           <Route path="/patient-list" element={<PatientList/>}/>
//           <Route path="/Upload" component={<UploadForm />}/>


        
//         {/* {!isLogin && <Route path="/" element={<PatientList />} /> } */}
//         {/* <Route path="/register" element={<Register />} /> */}
    
// {/* ///////////////////////////////////////// */}
//         <Route exact path='/' element={<Dashboardmain />}/>
//         <Route path='/dashboard' element={<Dashboardmain />}/>
//         <Route path='/patient-list' element={<PatientList />}/>
//         {/* <Route path='/educational' element={<EducationalResources />}/>

//         <Route path="/articles" element={<Articles />} />
//         <Route path="/videos" element={<Videos />} />
//         <Route path="/image-gallery" element={<ImageGallery/>} /> */}
//         <Route path="/login" element={<Login/>} />
//         {/* <Route path='/articles#article2' element={<EducationalResources />}/> */}
//       </Routes>
      
    

    
      


      
//      </>

//   );
// }

// export default App; 
  
import './App.css';
import Header from "./components/Header";
import SettingsPanel from "./components/settingPanel";
import Sidebar from "./components/sidebar";
import MainPanel from "./components/mainPanel";
import UploadForm from './components/UploadForm';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import Patients from "./pages/Patients";
import Login  from "./pages/Login";
import { ToastContainer } from 'react-toastify';
import DoctorsPatient from './pages/DoctorsPatient';
import PatientDetails from './pages/PatientDetails';
import CreatePatients from './pages/CreatePatients';
import Showpatient from './pages/Showpatient'
import Register from './pages/Register';

import 'react-toastify/dist/ReactToastify.css';
import { useSelector,useDispatch } from 'react-redux';

import { fetchDoctorData } from "./redux/reducers/doctors";
import Box from '@mui/material/Box';

import React, { useState, useEffect } from 'react';
import PreLoading from './components/PreLoading';
import Dashboardmain from './pages/Dashboard';
import '../src/index.css';

import PatientList from './pages/PatientList';
import PatientProfile from './pages/PatientProfile';  
import HistoricalData from './components/HistoricalData'
import AddPatient from './pages/AddPatient';

import PatientReport from './pages/PatientReport';
import PatientReports from './pages/Reports'; 
import EducationalResources from './pages/EducationalResources';
import Articles from './pages/Articles';
import Videos from './pages/Videos';
import ImageGallery from './pages/ImageGallery';
import Chatbot from './pages/Chatbot';
const today = new Date();
const formattedDate = today.toLocaleDateString('en-US', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric'
});

function App() {
  const isLogin = useSelector((state) => state.doctors.isLogin);
  const user = useSelector((state) => state.doctors.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDoctorData());
  }, [dispatch]);

  return (
    
    <>
      <ToastContainer />
      <PreLoading />

      <Routes>
        {isLogin && user.isAdime && <Route path='/patients' element={<Patients />} />}
        {isLogin && <Route path='/my-patient' element={<DoctorsPatient />} />}
        {isLogin && <Route path='/patient-details/:id' element={<PatientDetails />} />}
        <Route path='/showpatient' element={<Showpatient />} />
        <Route path='/patient-list' element={<PatientList />} />
        <Route path='/historicalData' element={<HistoricalData />} />
        <Route path="/patient/:id" element={<PatientProfile />} />
        <Route path='/upload' element={<UploadForm />} />
        <Route path="/patient/:id/report" element={<PatientReport />} />
        <Route path="/add-patient" element={<AddPatient />} />
        <Route path="/Chatbot" element={<Chatbot />} />
        <Route path='/educational' element={<EducationalResources />}/>

        <Route path="/articles" element={<Articles />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/image-gallery" element={<ImageGallery/>} />
        <Route path="/reports" element={<PatientReports/>}/>
        <Route path='/dashboard' element={<Dashboardmain />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Dashboardmain />} />
      </Routes>
    </>
  );
}

export default App;
