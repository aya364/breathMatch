


import React, { useRef, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/patientReport.css'; 
import repolog from '../images/3.png'
import wave from '../images/logoSign.png'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';


import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
ChartJS.register(ArcElement, Tooltip, Legend);


const PatientReport = () => {
  const reportRef = useRef();
  const { id } = useParams();
  const [patient, setPatient] = useState(null);
  const [breathCounts, setBreathCounts] = useState({ normal_count: 0, abnormal_count: 0 });
  const [fileName, setFileName] = useState(null);
  const [pvaPositions, setPvaPositions] = useState(null);

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/patient/${id}`);
        setPatient(response.data);
      } catch (error) {
        console.error("Error fetching patient data", error);
      }
    };
    fetchPatient();
  }, [id]);
  useEffect(() => {
    const fetchBreathCounts = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/fetch-breath-counts/${patient.p_name}`);
        setBreathCounts(response.data);
      } catch (error) {
        console.error("Error fetching breath counts", error);
      }
    };
    if (patient) {
      fetchBreathCounts();
    }
  }, [patient]);

  useEffect(() => {
    const fetchPvaPositions = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/fetch-pva-positions/${patient.p_name}`);
        setPvaPositions(response.data);
      } catch (error) {
        console.error("Error fetching PVA positions", error);
      }
    };
    if (patient) {
      fetchPvaPositions();
    }
  }, [patient]);
  
  const downloadReport = () => {
    const input = reportRef.current;
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgProps = pdf.getImageProperties(imgData);
      const imgWidth = pdfWidth;
      const imgHeight = (imgProps.height * pdfWidth) / imgProps.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pdfHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pdfHeight;
      }

      const pdfBlob = pdf.output('blob');
      const fileName = `${patient.p_name}-report.pdf`; // Use patient's name for the file name

      const formData = new FormData();
      formData.append('pdf', pdfBlob, fileName);

      axios.post(`http://localhost:4000/save-pdf/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((response) => {
        console.log('PDF saved successfully:', response.data);
      })
      .catch((error) => {
        console.error('Error saving PDF:', error);
      });

      pdf.save(fileName);
    }).catch((error) => {
      console.error('Error generating PDF:', error);
    });
  };

  if (!patient) return <div>Loading...</div>;
  const testResults = patient.testResults || [];
  const data = {
    labels: ['Normal Breaths', 'Abnormal Breaths'],
    datasets: [
      {
        label: '# of Breaths',
        data: [breathCounts.normal_count, breathCounts.abnormal_count],
        backgroundColor: [
          'rgba(75, 192, 192, 0.2)',
          'rgba(255, 99, 132, 0.2)'
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)'
        ],
        borderWidth: 1
      }
    ]
  };
  return (
    <>

    <div className='downloadrepDiv'>
    <button type="button" className="btn btn-info btn-icon-text downloadrep" onClick={downloadReport}>
        Print Report
        <i className="ti-printer btn-icon-append"></i>
      </button>
    </div>
      

      <div className='report' ref={reportRef}>
        <div className='reportCon'>
          <div className='reportHeader'>
            <div className='grayDiv'>
              <img src={repolog} alt='logo' className='repolog'></img>
            </div>
            <div className='triangle'></div>
            <div className='blueDiv'>
              <span className='hosName'>Beni-suef University Hospital</span>
            </div>
          </div>

          <div className='reportHeader2'>
            <div className='grayDiv2'><span className='patInfo'>Patient : </span> <span className='repValue'> {patient.p_name} </span></div>
            <div className='triangle2'></div>
            <div className='blueDiv2'>
              <span className='date'> Report date : {new Date().toDateString()}</span>
            </div>
          </div>

          <div className='mainInfoCon'>
            <div className='mainInfo1'>
              <div><span className='patInfo2'>Age : </span> <span className='repValue'> {patient.age} </span></div>
              <div><span className='patInfo2'>Admission Date : </span> <span className='repValue'> {new Date(patient.admission_date).toLocaleDateString()} </span></div>
              <div><span className='patInfo2'>Family phone : </span> <span className='repValue'> {patient.fam_phone} </span></div>
              <div><span className='patInfo2'>Address : </span> <span className='repValue'> {patient.address} </span></div>
              <div><span className='patInfo2'>Diagnosis : </span> <span className='repValue'> {patient.diagnosis} </span></div>
              <div><span className='patInfo2'>Sedation level : </span> <span className='repValue'> {patient.sedation_level} </span></div>
            </div>

            <div className='infocont'>
              <div className='mainInfo2'>
                <div className='main1'>
                  <p className='repValue'>Medical recordNum : </p>
                  <p className='patInfo2'>{patient.medical_recordNum}</p>
                </div>
                <div className='line1'></div>
                <div className='main1'>
                  <p className='repValue'>Supervisor :</p>
                  <p className='patInfo2'>{patient.supervisor}</p>
                </div>
                <div className='line1'></div>
                <div className='main1'>
                  <p className='repValue'>Room Number :</p>
                  <p className='patInfo2'>{patient.room_num}</p>
                </div>
              </div>

              <div className='breathA'>
                <img src={wave} className='wave' alt='wave'></img>
                <span className='Asyn'>Asynchrony Breaths : </span> &nbsp; <span className='PVA'> {breathCounts.abnormal_count} </span>
              </div>
            </div>
          </div>

          {/* <div className='chart'>
            <Doughnut data={data} />
          </div> */}

<div className='chart' style={{ width: '300px', height: '300px' }}>
  <Doughnut data={data} options={{ responsive: true, maintainAspectRatio: false }} />
</div>

          <div className='historydiv'>
            <p className='his'>History</p>
            <p className='repValue2'>{patient.history}</p>
          </div>

          <div>
            <span className='med'>Medications</span> : <span className='praket'>[</span> <span className='repValue2'>{patient.medications}</span> <span className='praket'>]</span>
          </div>

          <div className='testdiv'>
            <p className='testP'>Test Results</p>
            <table className='test-table'>
              <thead>
                <tr>
                  <th>Test Name</th>
                  <th>Result</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {testResults.map((test, index) => (
                  <tr key={index}>
                    <td>{test.testName}</td>
                    <td>{test.result}</td>
                    <td>{new Date(test.date).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className='mainInfo1'>
          <span className='patInfo2'>Connected to ventilator : </span>
    {patient.connected ? (
      <FaCheckCircle style={{ color: 'green' }} /> 
    ) : (
      <FaTimesCircle style={{ color: 'red' }} />
    )}

              <div><span className='patInfo2'>Tidal volume : </span> <span className='repValue'> {patient.tidal_volume} </span></div>
              <div><span className='patInfo2'>Respiratory rate : </span> <span className='repValue'> {patient.respiratory_rate} </span></div>
              <div><span className='patInfo2'>PEEP : </span> <span className='repValue'> {patient.peep} </span></div>
            </div>
            <div className='pvaPositions'>
              <p className='his'>PVA Positions</p>
              <ul>
                {pvaPositions && pvaPositions.map((position, index) => (
                  <li key={index}>{position}</li>
                ))}
              </ul>

            </div>



            {/* <div className='footerCon'>
          <div className='repfooter1'>
            <div>
            <i className="bx bx-phone icon"></i> <span>0822323374</span>
            </div>

            <div>
              <i className="bx bx-map icon"></i> <span>Mohamed Hassan St Elshamla</span>
            </div>

            <div>
            <i className="bx bx-globe icon"></i> <span>info@bsu.edu.eg</span>
            </div>
          </div>
          <div className='repfooter2'></div>

          </div> */}
        </div>
      </div>
    </>
  );
};

export default PatientReport;








