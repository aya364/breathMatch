// import React, { useState } from 'react';
// import axios from 'axios';
// import PlotSlider from './PlotSlider';
// import Sidebar from './sidebar';
// import '../css/Upload.css';

// function UploadForm() {
//   const [file, setFile] = useState(null);
//   const [containerVisible, setContainerVisible] = useState(false);
//   const [pvaPositions, setPvaPositions] = useState([]);
  
  
//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleUpload = async () => {
//     const formData = new FormData();
//     formData.append('file', file);

//     try {
//       const response = await axios.post('http://localhost:5000/uploads', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });

//       if (response.data.message) {
//         setContainerVisible(true);
//         setPvaPositions(response.data.pva_positions || []);
//       }
//     } catch (error) {
//       console.error('Error uploading file:', error);
//     }
//   };

//   return (
//   <div className="app-container">
//     <Sidebar />
//     <div className="Upload">
//       <div className="upload-form">
//         <h1>Upload CSV File</h1>
//         <input type="file" accept=".csv" onChange={handleFileChange} />
//         <button onClick={handleUpload}>Upload</button>

//         {containerVisible && <PlotSlider pvaPositions={pvaPositions} />}
//       </div>
//     </div>
//   </div>
//   );
// }

// export default UploadForm;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import PlotSlider from './PlotSlider';
// import Sidebar from './sidebar';
// import '../css/Upload.css';

// function UploadForm() {
//   const [file, setFile] = useState(null);
//   const [containerVisible, setContainerVisible] = useState(false);
//   const [pvaPositions, setPvaPositions] = useState([]);
//   const [patients, setPatients] = useState([]);
//   const [selectedPatient, setSelectedPatient] = useState('');
//   const [error, setError] = useState('');

//   useEffect(() => {
//     // Fetch list of patients when component mounts
//     const fetchPatients = async () => {
//       try {
//         const response = await axios.get('http://localhost:4000/');
//         console.log('API response:', response.data); // Log the response
//         setPatients(response.data.data);
//       } catch (error) {
//         console.error('Error fetching patients:', error);
//         setError('Error fetching patients');
//       }
//     };

//     fetchPatients();
//   }, []);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleUpload = async () => {
//     if (!file || !selectedPatient) {
//       setError('Please select a file and a patient');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('patient_name', selectedPatient);
//     formData.append('file', file);

//     try {
//       const response = await axios.post('http://localhost:5000/uploads', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });

//       console.log('Response:', response.data);

//       if (response.data.message) {
//         setContainerVisible(true);
//         setPvaPositions(response.data.pva_positions || []);
//         setError('');
//       } else {
//         setError('Upload failed');
//       }
//     } catch (error) {
//       console.error('Error uploading file:', error);
//       setError('Error uploading file');
//     }
//   };

//   return (
//     <div className="app-container">
//       <Sidebar />
//       <div className="Upload">
//         <div className="upload-form">
//           <h1>Upload CSV File</h1>
//           {error && <p className="error-message">{error}</p>}
//           <select value={selectedPatient} onChange={(e) => setSelectedPatient(e.target.value)}>
//             <option value="">Select Patient</option>
//             {patients.map((patient) => (
//               <option key={patient._id} value={patient.p_name}>{patient.p_name}</option>
//             ))}
//           </select>
//           <input type="file" accept=".csv" onChange={handleFileChange} />
//           <button onClick={handleUpload}>Upload</button>

//           {containerVisible && <PlotSlider pvaPositions={pvaPositions} />}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default UploadForm;
//************************************************************************************** 
//************************************************************************************** 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlotSlider from './PlotSlider';
import Sidebar from './sidebar';
import '../css/Upload.css';
// import './css/Upload.css';


function UploadForm() {
  const [file, setFile] = useState(null);
  const [containerVisible, setContainerVisible] = useState(false);
  const [pvaPositions, setPvaPositions] = useState([]);
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get('http://localhost:4000/');
        setPatients(response.data.data);
      } catch (error) {
        console.error('Error fetching patients:', error);
        setError('Error fetching patients');
      }
    };

    fetchPatients();
  }, []);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file || !selectedPatient) {
      setError('Please select a file and a patient');
      return;
    }

    const formData = new FormData();
    formData.append('patient_name', selectedPatient.p_name);
    formData.append('patient_id', selectedPatient._id); // Using patient ID
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:5000/uploads', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('Response:', response.data);

      if (response.data.message) {
        setContainerVisible(true);
        setPvaPositions(response.data.pva_positions || []);
        setError('');
      } else {
        setError('Upload failed');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      setError('Error uploading file');
    }
  };

  return (
    <div className="app-container">
      <Sidebar />
      <div className="Upload">
        <div className="upload-form">
        <i className="bx bx-cloud-upload icon"></i>
          <h1>Upload CSV File</h1>

          <div className='dashContainer'>
          {error && <p className="error-message">{error}</p>}
          <select value={selectedPatient._id} onChange={(e) => setSelectedPatient(patients.find(p => p._id === e.target.value))}>
            <option value="">Select Patient</option>
            {patients.map((patient) => (
              <option key={patient._id} value={patient._id}>{patient.p_name}</option>
            ))}
          </select>
          <input type="file" accept=".csv" onChange={handleFileChange} />

          <button onClick={handleUpload} className='button-68'>Upload</button>

          {containerVisible && <PlotSlider pvaPositions={pvaPositions} />}

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#a2d9ff" fill-opacity="0.9" d="M0,64L20,69.3C40,75,80,85,120,112C160,139,200,181,240,213.3C280,245,320,267,360,261.3C400,256,440,224,480,181.3C520,139,560,85,600,90.7C640,96,680,160,720,181.3C760,203,800,181,840,154.7C880,128,920,96,960,90.7C1000,85,1040,107,1080,144C1120,181,1160,235,1200,224C1240,213,1280,139,1320,106.7C1360,75,1400,85,1420,90.7L1440,96L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"></path></svg>
        </div>
                    
        </div>

      </div>
    </div>
  );
}

export default UploadForm;
