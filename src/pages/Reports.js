// // Reports.js
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../css/Reports.css'; 
// import file from '../images/document.jpg'
// import Close from '@material-ui/icons/Close';
// import Sidebar from '../components/sidebar';


// const PatientReports = () => {
//   const [reports, setReports] = useState([]);

//   useEffect(() => {
//     const fetchReports = async () => {
//       try {
//         const response = await axios.get('http://localhost:4000/reports');
//         setReports(response.data.files.reverse());
//       } catch (error) {
//         console.error("Error fetching reports", error);
//       }
//     };

//     fetchReports();
//   }, []);

//   const deleteReport = async (filename) => {
//     try {
//       await axios.delete(`http://localhost:5000/delete-pdf/${filename}`);
//       setReports(reports.filter(report => report.filename !== filename));
//     } catch (error) {
//       console.error("Error deleting report", error);
//     }
//   };

//   return (
//     <div className="app-container">
//       <Sidebar />
//       <div>
//         <div className='advanced-heading'>
//           <h1>Reports</h1>
//         </div>

//         <ul>
//           {reports.map((report, index) => (
//             <li key={index} className="pdf-row" style={{ backgroundColor: index % 2 === 0 ? '#e8f7fa' : '#ffffff' }}>
//               <div className="pdf-info">
//                 <div className="pdf-icon">
//                   <img src={file} alt='pdf' />
//                 </div>
//                 <span>{report.patientName}</span>
//               </div>
//               <div className="pdf-actions">
//                 <a href={`http://localhost:5000/pdfs/${report.filename}`} download>
//                   <button className="button-3">Download</button>
//                 </a>
//                 <button className="btn ml-2 delete-button" onClick={() => deleteReport(report.filename)}>
//                   <Close className='close2' />
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default PatientReports;
//***************************************************************************** 
// Reports.js


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Reports.css'; 
import file from '../images/document.jpg'
import Close from '@material-ui/icons/Close';
import Sidebar from '../components/sidebar';

import vid4 from '../images/educational/filees.mp4';

const PatientReports = () => {
  const { id } = useParams();
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await axios.get('http://localhost:4000/reports');
        setReports(response.data.files);
      } catch (error) {
        console.error("Error fetching reports", error);
      }
    };

    fetchReports();
  }, []);

  const deleteReport = async (filename) => {
    try {
      await axios.delete(`http://localhost:4000/delete-pdf/${filename}`);
      setReports(reports.filter(report => report !== filename));
    } catch (error) {
      console.error("Error deleting report", error);
    }
  };

  return (
    <div className="app-container">
      <Sidebar />
      <div style={{width:'100%'}}>
        <div className='advanced-heading'>
          <h1>Reports</h1>
        </div>

        <div className='gif'>
          <video width="200" height="190" autoPlay loop muted playsInline>
            <source src={vid4} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <ul>
          {[...reports].reverse().map((report, index) => {
            const reportName = report.replace('.pdf', '').replace(/^[0-9]+-/, ''); 
            return (
              <li key={index} className="pdf-row" style={{ backgroundColor: index % 2 === 0 ? '#e8f7fa' : '#ffffff' }}>
                <div className="pdf-info">
                  <div className="pdf-icon"><img src={file} alt='pdf' /></div>
                  <span>{reportName}</span>
                </div>
                <div className="pdf-actions">
                  <a href={`http://localhost:4000/pdfs/${report}`} download>
                    <button className="button-3">Download</button>
                  </a>
                  <button className="btn ml-2 delete-button" onClick={() => deleteReport(report)}>
                    <Close className='close2' />
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default PatientReports;
