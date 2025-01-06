// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import Sidebar from '../components/sidebar';

// const PatientProfile = () => {
//   const { id } = useParams();
//   const [patient, setPatient] = useState(null);
  
//   useEffect(() => {
//     const fetchPatient = async () => {
//       try {
//         const response = await axios.get(`http://localhost:4000/patient/${id}`);
//         setPatient(response.data);
//       } catch (error) {
//         console.error("Error fetching patient data", error);
//       }
//     };

//     fetchPatient();
//   }, [id]);

//   if (!patient) return <div>Loading...</div>;

//   return (
//     <div className="app-container">
//       <Sidebar />
//         <div>
//         <h1>{patient.p_name}'s Profile</h1>
//         <p><strong>Age:</strong> {patient.age}</p>
//         <p><strong>Family Phone:</strong> {patient.fam_phone}</p>
//         <p><strong>Address:</strong> {patient.address}</p>
//         <p><strong>Room Number:</strong> {patient.room_num}</p>
//         <p><strong>Admission Date:</strong> {new Date(patient.admission_date).toLocaleDateString()}</p>
//         <p><strong>Supervisor:</strong> {patient.supervisor}</p>
//         <p><strong>Medical Record Number:</strong> {patient.medical_recordNum}</p>
//         <p><strong>Diagnosis:</strong> {patient.diagnosis}</p>
//         <p><strong>Sedation Level:</strong> {patient.sedation_level}</p>
//         </div>
//     </div>
//   );
// };

// export default PatientProfile;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import Sidebar from '../components/sidebar';

// const PatientProfile = () => {
//   const { id } = useParams();
//   const [patient, setPatient] = useState(null);
//   const [zipFileLink, setZipFileLink] = useState('');

//   useEffect(() => {
//     const fetchPatient = async () => {
//       try {
//         const response = await axios.get(`http://localhost:4000/patient/${id}`);
//         setPatient(response.data);
//       } catch (error) {
//         console.error("Error fetching patient data", error);
//       }
//     };

//     fetchPatient();
//   }, [id]);

//   const handleDownloadZip = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/plots', { responseType: 'blob' });
//       const url = window.URL.createObjectURL(new Blob([response.data]));
//       setZipFileLink(url);
//     } catch (error) {
//       console.error('Error downloading zip file:', error);
//     }
//   };

//   if (!patient) return <div>Loading...</div>;

//   return (
//     <div className="app-container">
//       <Sidebar />
//         <div>
//         <h1>{patient.p_name}'s Profile</h1>
//         <p><strong>Age:</strong> {patient.age}</p>
//         <p><strong>Family Phone:</strong> {patient.fam_phone}</p>
//         <p><strong>Address:</strong> {patient.address}</p>
//         <p><strong>Room Number:</strong> {patient.room_num}</p>
//         <p><strong>Admission Date:</strong> {new Date(patient.admission_date).toLocaleDateString()}</p>
//         <p><strong>Supervisor:</strong> {patient.supervisor}</p>
//         <p><strong>Medical Record Number:</strong> {patient.medical_recordNum}</p>
//         <p><strong>Diagnosis:</strong> {patient.diagnosis}</p>
//         <p><strong>Sedation Level:</strong> {patient.sedation_level}</p>
//         <button onClick={handleDownloadZip}>Download {patient.p_name}'s Zip File</button>
//         {zipFileLink && <a href={zipFileLink} download="plots.zip">Download {patient.p_name}'s Zip File</a>}
//         </div>
//     </div>
//   );
// };

// export default PatientProfile;
//*************************************************************************

// // PatientProfile.js
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import Sidebar from '../components/sidebar';

// const PatientProfile = () => {
//   const { id } = useParams();
//   const [patient, setPatient] = useState(null);
//   const [files, setFiles] = useState([]);

//   useEffect(() => {
//     const fetchPatient = async () => {
//       try {
//         const response = await axios.get(`http://localhost:4000/patient/${id}`);
//         setPatient(response.data);
//       } catch (error) {
//         console.error("Error fetching patient data", error);
//       }
//     };

//     const fetchFiles = async () => {
//       try {
//         const response = await axios.get(`http://localhost:4000/api/patient_files/${id}`);
//         setFiles(response.data);
//       } catch (error) {
//         console.error("Error fetching patient files", error);
//       }
//     };

//     fetchPatient();
//     fetchFiles();
//   }, [id]);

//   if (!patient) return <div>Loading...</div>;

//   return (
//     <div className="app-container">
//       <Sidebar />
//       <div>
//         <h1>{patient.p_name}'s Profile</h1>
//         <p><strong>Age:</strong> {patient.age}</p>
//         <p><strong>Family Phone:</strong> {patient.fam_phone}</p>
//         <p><strong>Address:</strong> {patient.address}</p>
//         <p><strong>Room Number:</strong> {patient.room_num}</p>
//         <p><strong>Admission Date:</strong> {new Date(patient.admission_date).toLocaleDateString()}</p>
//         <p><strong>Supervisor:</strong> {patient.supervisor}</p>
//         <p><strong>Medical Record Number:</strong> {patient.medical_recordNum}</p>
//         <p><strong>Diagnosis:</strong> {patient.diagnosis}</p>
//         <p><strong>Sedation Level:</strong> {patient.sedation_level}</p>
//         <table>
//           <thead>
//             <tr>
//               <th>File</th>
//               <th>Type</th>
//               <th>Upload Date</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {files.map((file, index) => (
//               <tr key={index}>
//                 <td>{file.patient_name}</td>
//                 <td>{file.zip_file_url ? 'ZIP' : 'CSV'}</td>
//                 <td>{new Date(file.upload_time).toLocaleString()}</td>
//                 <td>
//                   {file.zip_file_url && (
//                     <a href={file.zip_file_url} download={`${patient.p_name}.zip`}>Download ZIP</a>
//                   )}
//                   {file.csv_file_url && (
//                     <a href={file.csv_file_url} download={`${patient.p_name}.csv`}>Download CSV</a>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default PatientProfile;

//**********************************************************************************
//********************************************************************************
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import Sidebar from '../components/sidebar';
// import '../css/PatientProfile.css'; 

// const PatientProfile = () => {
//   const { id } = useParams();
//   const [patient, setPatient] = useState(null);
//   const [files, setFiles] = useState([]);
  
//   useEffect(() => {
//     const fetchPatient = async () => {
//       try {
//         const response = await axios.get(`http://localhost:4000/patient/${id}`);
//         setPatient(response.data);
//       } catch (error) {
//         console.error("Error fetching patient data", error);
//       }
//     };

//     const fetchFiles = async () => {
//       try {
//         const response = await axios.get(`http://localhost:4000/api/patient_files/${id}`);
//         setFiles(response.data);
//       } catch (error) {
//         console.error("Error fetching patient files", error);
//       }
//     };

//     fetchPatient();
//     fetchFiles();
//   }, [id]);

//   if (!patient) return <div className="loading">Loading...</div>;

//   return (
//     <div className="app-container">
//       <Sidebar />
//       <div className="profile-container">
//         <h1 className="profile-title">{patient.p_name}'s Profile</h1>
//         <div className="patient-details">
//           <p><strong>Age:</strong> {patient.age}</p>
//           <p><strong>Family Phone:</strong> {patient.fam_phone}</p>
//           <p><strong>Address:</strong> {patient.address}</p>
//           <p><strong>Room Number:</strong> {patient.room_num}</p>
//           <p><strong>Admission Date:</strong> {new Date(patient.admission_date).toLocaleDateString()}</p>
//           <p><strong>Supervisor:</strong> {patient.supervisor}</p>
//           <p><strong>Medical Record Number:</strong> {patient.medical_recordNum}</p>
//           <p><strong>Diagnosis:</strong> {patient.diagnosis}</p>
//           <p><strong>Sedation Level:</strong> {patient.sedation_level}</p>
//         </div>
//         <table className="file-table">
//           <thead>
//             <tr>
//               <th>File</th>
//               <th>Type</th>
//               <th>Upload Date</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {files.map(file => (
//               <tr key={file._id}>
//                 <td>
//                   <a href={file.csv_file_url || file.zip_file_url} target="_blank" rel="noopener noreferrer">
//                     {file.csv_file_url || file.zip_file_url}
//                   </a>
//                 </td>
//                 <td>{file.csv_file_url ? 'CSV' : 'ZIP'}</td>
//                 <td>{new Date(file.upload_time).toLocaleString()}</td>
//                 <td>
//                   <button 
//                     className="download-button"
//                     onClick={() => {
//                       const link = document.createElement('a');
//                       link.href = file.csv_file_url || file.zip_file_url;
//                       link.setAttribute('download', `${patient.p_name}_${file.csv_file_url ? 'CSV' : 'ZIP'}`);
//                       document.body.appendChild(link);
//                       link.click();
//                       document.body.removeChild(link);
//                     }}
//                   >
//                     Download
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default PatientProfile;

//*****************************************************************************
//**************************************************************************** 
//******************************************************************* 

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom'; // Add Link import here
import Sidebar from '../components/sidebar';
import '../css/PatientProfile.css'; 

const PatientProfile = () => {
  const { id } = useParams();
  const [patient, setPatient] = useState(null);
  const [files, setFiles] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    _id: id,
    p_name: "",
    age: "",
    fam_phone: "",
    address: "",
    room_num: "",
    admission_date: "",
    supervisor: "",
    medical_recordNum: "",
    diagnosis: "",
    sedation_level: "",
    history: "",
    medications: "",
    testResults: [{ testName: "", result: "", date: "" }],
    connected: true,
    mode: "",
    tidal_volume: "",
    respiratory_rate: "",
    peep: "",
  });
  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/patient/${id}`);
        const patientData = response.data;
        if (!patientData.testResults) {
          patientData.testResults = [{ testName: "", result: "", date: "" }];
        }
        setPatient(patientData);
        setFormData(patientData);
      } catch (error) {
        console.error("Error fetching patient data", error);
      }
    };

    const fetchFiles = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/patient_files/${id}`);
        setFiles(response.data);
      } catch (error) {
        console.error("Error fetching patient files", error);
      }
    };

    fetchPatient();
    fetchFiles();
  }, [id, editMode]);
  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    if (name === "connected") {
      setFormData({
        ...formData,
        [name]: value === 'true',
      });
    } else if (["testName", "result", "date"].includes(name)) {
      const updatedTestResults = [...formData.testResults];
      updatedTestResults[index][name] = value;
      setFormData({
        ...formData,
        testResults: updatedTestResults,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  const handleSave = async (e) => {
    e.preventDefault();
    try {
      console.log("FormData before save:", formData);
      const response = await axios.put(`http://localhost:4000/update`, formData);
      console.log("Response from save:", response.data);
      if (response.data.success) {
        setPatient(response.data.data); 
        setEditMode(false);
      } else {
        console.error("Error updating patient data", response.data.message);
      }
    } catch (error) {
      console.error("Error updating patient data", error);
    }
  };
  if (!patient) return <div className="loading">Loading...</div>;

  return (
    <div className="app-container">
      <Sidebar />
      <div style={{width: '100%'}}>
  
        <div className='profName'>
          <h2 className='profNameH'>{patient.p_name} Profile</h2>
        </div>
        {editMode ? (
        <form onSubmit={handleSave}>
        <div className='tablesflex'>
          <table className='editTable'>
            <tbody>
              <tr>
                <td className='labels'>Age:</td>
                <td><input type="text" className='forminput form-control' name="age" value={formData.age} onChange={handleChange} /></td>
              </tr>
              <tr>
                <td className='labels'>Family Phone:</td>
                <td><input type="text" className='forminput form-control' name="fam_phone" value={formData.fam_phone} onChange={handleChange} /></td>
              </tr>
              <tr>
                <td className='labels'>Address:</td>
                <td><input type="text" className='forminput form-control' name="address" value={formData.address} onChange={handleChange} /></td>
              </tr>
              <tr>
                <td className='labels'>Room Number:</td>
                <td><input type="text" className='forminput form-control' name="room_num" value={formData.room_num} onChange={handleChange} /></td>
              </tr>
              <tr>
                <td className='labels'>Admission Date:</td>
                <td><input type="date" className='forminput form-control' name="admission_date" value={formData.admission_date} onChange={handleChange} /></td>
              </tr>
              <tr>
                <td className='labels'>Medical Record Number:</td>
                <td><input type="text" className='forminput form-control' name="medical_recordNum" value={formData.medical_recordNum} onChange={handleChange} /></td>
              </tr>
              <tr>
                <td className='labels'>Supervisor:</td>
                <td><input type="text" className='forminput form-control' name="supervisor" value={formData.supervisor} onChange={handleChange} /></td>
              </tr>
              <tr>
                <td className='labels'>Diagnosis:</td>
                <td><input type="text" className='forminput form-control' name="diagnosis" value={formData.diagnosis} onChange={handleChange} /></td>
              </tr>
              <tr>
                <td className='labels'>Sedation Level:</td>
                <td><input type="text" className='forminput form-control' name="sedation_level" value={formData.sedation_level} onChange={handleChange} /></td>
              </tr>
            </tbody>
          </table>

          <table className='editTable2'>
            <tbody>
              <tr>
                <td className='labels'>History:</td>
                <td><input type="text" className='forminput form-control' name="history" value={formData.history} onChange={handleChange} /></td>
              </tr>
              <tr>
                <td className='labels'>Medications:</td>
                <td><input type="text" className='forminput form-control' name="medications" value={formData.medications} onChange={handleChange} /></td>
              </tr>
              <tr>
                <td className='labels'>Connected:</td>
                <td>
                  <select className='forminput form-control' id='connected' name='connected' value={formData.connected} onChange={handleChange}>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td className='labels'>Ventilator Mode:</td>
                <td><input type="text" className='forminput form-control' name="mode" value={formData.mode} onChange={handleChange} /></td>
              </tr>
              <tr>
                <td className='labels'>Tidal volume:</td>
                <td><input type="text" className='forminput form-control' name="tidal_volume" value={formData.tidal_volume} onChange={handleChange} /></td>
              </tr>
              <tr>
                <td className='labels'>Respiratory rate:</td>
                <td><input type="text" className='forminput form-control' name="respiratory_rate" value={formData.respiratory_rate} onChange={handleChange} /></td>
              </tr>
              <tr>
                <td className='labels'>PEEP:</td>
                <td><input type="text" className='forminput form-control' name="peep" value={formData.peep} onChange={handleChange} /></td>
              </tr>
            </tbody>
          </table>
        </div>

        <table className='tests2'>
          {formData.testResults && formData.testResults.map((testResult, index) => (
            <tbody key={index}>
              <tr>
                <td className='labels'>Test Name:</td>
                <td><input type="text" name="testName" className='forminput form-control' value={testResult.testName} onChange={(e) => handleChange(e, index)} /></td>
              </tr>
              <tr>
                <td className='labels'>Result:</td>
                <td><input type="text" name="result" className='forminput form-control' value={testResult.result} onChange={(e) => handleChange(e, index)} /></td>
              </tr>
              <tr>
                <td className='labels'>Result Date:</td>
                <td><input type="date" name="date" className                    ='forminput form-control' value={testResult.date} onChange={(e) => handleChange(e, index)} /></td>
              </tr>
            </tbody>
          ))}
        </table>

        <div className='S-btns btnMargin'>
          <button type="submit" className='button-43'>Save</button>
          <button type="button" onClick={() => setEditMode(false)} className='button-43'>Cancel</button>
        </div>
      </form>
      ) : (
        <>
        <div className='tablesflex'>
          <table>
            <tbody>
              <tr>
                <td className='labels'>Age:</td>
                <td>{patient.age}</td>
              </tr>
              <tr>
                <td className='labels'>Family Phone:</td>
                <td>{patient.fam_phone}</td>
              </tr>
              <tr>
                <td className='labels'>Address:</td>
                <td>{patient.address}</td>
              </tr>
              <tr>
                <td className='labels'>Room Number:</td>
                <td>{patient.room_num}</td>
              </tr>
              <tr>
                <td className='labels'>Admission Date:</td>
                <td>{new Date(patient.admission_date).toLocaleDateString()}</td>
              </tr>
              <tr>
                <td className='labels'>Medical Record Number:</td>
                <td>{patient.medical_recordNum}</td>
              </tr>
              <tr>
                <td className='labels'>Supervisor:</td>
                <td>{patient.supervisor}</td>
              </tr>
              <tr>
                <td className='labels'>Diagnosis:</td>
                <td>{patient.diagnosis}</td>
              </tr>
              <tr>
                <td className='labels'>Sedation Level:</td>
                <td>{patient.sedation_level}</td>
              </tr>
            </tbody>
          </table>

          <table className='editTable2'>
            <tbody>
              <tr>
                <td className='labels'>History:</td>
                <td>{patient.history}</td>
              </tr>
              <tr>
                <td className='labels'>Medications:</td>
                <td>{patient.medications}</td>
              </tr>
              <tr>
                <td className='labels'>Connected:</td>
                <td>{patient.connected ? 'Yes' : 'No'}</td>
              </tr>
              <tr>
                <td className='labels'>Ventilator Mode:</td>
                <td>{patient.mode}</td>
              </tr>
              <tr>
                <td className='labels'>Tidal volume:</td>
                <td>{patient.tidal_volume}</td>
              </tr>
              <tr>
                <td className='labels'>Respiratory rate:</td>
                <td>{patient.respiratory_rate}</td>
              </tr>
              <tr>
                <td className='labels'>PEEP:</td>
                <td>{patient.peep}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <table className='tests2'>
          {patient.testResults && patient.testResults.map((testResult, index) => (
            <tbody key={index}>
              <tr>
                <td className='labels'>Test Name:</td>
                <td>{testResult.testName}</td>
              </tr>
              <tr>
                <td className='labels'>Result:</td>
                <td>{testResult.result}</td>
              </tr>
              <tr>
                <td className='labels'>Result Date:</td>
                <td>{new Date(testResult.date).toLocaleDateString()}</td>
              </tr>
            </tbody>
          ))}
        </table>

        <button onClick={handleEditClick} className='button-43 reportbtn2'>Update</button>
        <Link to={`/patient/${id}/report`}><button className='button-51 reportbtn2'>View patient report</button></Link>
      </>
      )}
      <div style={{width:'85%', margin:'auto'}}>
        <table className='test-table'>
          <thead>
            <tr>
              <th>File</th>
              <th>Type</th>
              <th>Upload Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {files.map(file => (
              <tr key={file._id}>
                <td>
                  <a href={file.csv_file_url || file.zip_file_url} target="_blank" rel="noopener noreferrer">
                    {file.csv_file_url || file.zip_file_url}
                  </a>
                </td>
                <td>{file.csv_file_url ? 'CSV' : 'ZIP'}</td>
                <td>{new Date(file.upload_time).toLocaleString()}</td>
                <td>
                  <button 
                    className="download-button"
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = file.csv_file_url || file.zip_file_url;
                      link.setAttribute('download', `${patient.p_name}_${file.csv_file_url ? 'CSV' : 'ZIP'}`);
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                  >
                    Download
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        </div>
        

      </div>
    // </div>
  );
};

export default PatientProfile;