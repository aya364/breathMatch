// import React, { useState } from 'react';
// import axios from 'axios';
// import Sidebar from './sidebar';

// function HistoricalData() {
//   const [fileLink, setFileLink] = useState('');

//   const handleDownload = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/historical-data', { responseType: 'blob' });
//       const url = window.URL.createObjectURL(new Blob([response.data]));
//       setFileLink(url);
//     } catch (error) {
//       console.error('Error downloading file:', error);
//     }
//   };

//   return (
//     <div className="app-container">
//       <Sidebar />
//       <div className="historical-data">
//         <h1> Historical Data</h1>
//         <button onClick={handleDownload}>Download</button>
//         {fileLink && <a href={fileLink} download="historical_data.csv">Download CSV</a>}
//       </div>
//     </div>
//   );
// }

// export default HistoricalData;
//****************************************************************** 
// HistoricalData.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from './sidebar';
import '../css/HistoricalData.css'; 
import svg from '../images/graph.png'
import hist from '../images/historical.png'
function HistoricalData() {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/patient_files');
        setFiles(response.data);
      } catch (error) {
        console.error("Error fetching files", error);
      }
    };

    fetchFiles();
  }, []);

  const downloadFile = (url, fileName) => {
    axios({
      url: url,
      method: 'GET',
      responseType: 'blob',
    }).then(response => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', fileName);
      document.body.appendChild(link);
      link.click();
    });
  };

return(
  
<>
<div className="app-container">
      <Sidebar />

      <div className='hisCont'>
      <div className='profName profName2'>
          <h2 className='profNameH'>Data Archive</h2>
          </div>

         
  <div className='hisImg'>

      <img src={svg} alt='svg' className='hist1'></img>
      <img src={hist} alt='his' className='hist2'></img>
  </div>


  <div className="historical-data2">
      <table className='test-table'>
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>File Type</th>
            <th>Upload Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {files.map((file, index) => (
            <tr key={index}>
              <td>{file.patient_name}</td>
              <td>{file.zip_file_url ? 'ZIP' : 'CSV'}</td>
              <td>{new Date(file.upload_time).toLocaleString()}</td>
              <td>
                {file.zip_file_url && (
                  <button className='histBtn' onClick={() => downloadFile(file.zip_file_url, `${file.patient_name}.zip`)}>
                    Download ZIP
                  </button>
                )}
                {file.csv_file_url && (
                  // <button onClick={() => downloadFile(file.csv_file_url, `${file.patient_name}.csv`)}>
                  //   Download CSV
                  // </button>
                  <button className='histBtn' onClick={() => downloadFile(file.csv_file_url, `${file.patient_name}.csv`)}>
                      Download CSV
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  
  </div>

  </div>
  </>
 
);
};

export default HistoricalData;



//********************************************************************
//********************************************************************
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import Sidebar from './sidebar';
// import '../css/HistoricalData.css'; // Add custom CSS for beautiful design

// const HistoricalData = () => {
//   const { id } = useParams();
//   const [files, setFiles] = useState([]);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchFiles = async () => {
//       try {
//         const response = await axios.get(`http://localhost:4000/api/patient_files/${id}`);
//         setFiles(response.data);
//       } catch (error) {
//         console.error('Error fetching files:', error);
//         if (error.response) {
//           // Server responded with a status other than 200 range
//           setError(`Error fetching files: ${error.response.status} ${error.response.data.message}`);
//         } else if (error.request) {
//           // Request was made but no response received
//           setError('Error fetching files: No response from server');
//         } else {
//           // Something else happened
//           setError(`Error fetching files: ${error.message}`);
//         }
//       }
//     };

//     fetchFiles();
//   }, [id]);

//   return (
//     <div className="app-container">
//       <Sidebar />
//       <div className="HistoricalData">
//         <h1>Historical Data</h1>
//         {error && <p className="error-message">{error}</p>}
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
//                   <a href={file.csv_file_url || file.zip_file_url} download={`${file.patient_name}_${file.csv_file_url ? 'CSV' : 'ZIP'}`}>
//                     Download
//                   </a>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default HistoricalData;
