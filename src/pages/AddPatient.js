// AddPatient.js 



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../components/sidebar';
import 'boxicons/css/boxicons.min.css';

import '../vendors/feather/feather.css'
import '../vendors/ti-icons/css/themify-icons.css'
import '../vendors/css/vendor.bundle.base.css'

axios.defaults.baseURL = "http://localhost:4000/";
const AddPatient = () => {
  const [addSection, setAddSection] = useState(true);
  const [editSection, setEditSection] = useState(false);
  const [dataList, setDataList] = useState([]);
  const [formData, setFormData] = useState({
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
    peep: ""
  });

  const handleOneChange = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'connected' ? (value === 'true') : value,
    }));
  };

  const handleTestResultChange = (e, index) => {
    const { name, value } = e.target;
    const newTestResults = [...formData.testResults];
    newTestResults[index][name] = value;
    setFormData({ ...formData, testResults: newTestResults });
  };

  const addTestResult = () => {
    setFormData((prev) => ({
      ...prev,
      testResults: [...prev.testResults, { testName: "", result: "", date: "" }]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post("/create", formData);
      console.log(data);
      if (data.data.success) {
        alert(data.data.message);
        setFormData({
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
        getFetchData();
      }
    } catch (error) {
      console.error("Error adding patient:", error);
    }
  };

  const getFetchData = async () => {
    try {
      const data = await axios.get("/");
      console.log(data);
      if (data.data.success) {
        setDataList(data.data.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getFetchData();
  }, []);

  return (
    <>
      <div className="app-container">
        <Sidebar />

        <div className='addBox'>
 
          <div className='profName'>
            <h2 className='profNameH'>Add new patient</h2>
            </div>


          <div className="patient-list-container">
            {addSection && (
              <div className='add-c'>
                <form className="patient-form" onSubmit={handleSubmit}>
                  <div style={{ display: 'flex' }}>
                    <div style={{ margin: 'auto 14px 0 0' }}>
                      <label className='form-label' htmlFor='p_name'>Name</label>
                      <input className='forminput form-control' type='text' id='p_name' name='p_name' value={formData.p_name} onChange={handleOneChange}></input>
                    </div>

                    <div>
                      <label className='form-label' htmlFor='age'>Age</label>
                      <input className='forminput form-control' type='text' id='age' name='age' value={formData.age} onChange={handleOneChange}></input>
                    </div>
                  </div>

                  <div style={{ display: 'flex' }}>
                    <div style={{ margin: 'auto 14px 0 0' }}>
                      <label className='form-label' htmlFor='room_num'>Room Number</label>
                      <input className='forminput form-control' type='text' id='room_num' name='room_num' value={formData.room_num} onChange={handleOneChange}></input>
                    </div>
                    <div>
                      <label className='form-label' htmlFor='admission_date'>Admission date</label>
                      <input className='forminput form-control' type='date' id='admission_date' name='admission_date' value={formData.admission_date} onChange={handleOneChange}></input>
                    </div>
                  </div>

                  <div style={{ display: 'flex' }}>
                    <div style={{ margin: 'auto 14px 0 0' }}>
                      <label className='form-label' htmlFor='medical_recordNum'>Medical recordNum</label>
                      <input className='forminput form-control' type='text' id='medical_recordNum' name='medical_recordNum' value={formData.medical_recordNum} onChange={handleOneChange}></input>
                    </div>
                    <div>
                      <label className='form-label' htmlFor='diagnosis'>Diagnosis</label>
                      <input className='forminput form-control' type='text' id='diagnosis' name='diagnosis' value={formData.diagnosis} onChange={handleOneChange}></input>
                    </div>
                  </div>

                  <div style={{ display: 'flex' }}>
                    <div style={{ margin: 'auto 14px 0 0' }}>
                      <label className='form-label' htmlFor='fam_phone'>Family Phone</label>
                      <input className='forminput form-control' type='text' id='fam_phone' name='fam_phone' value={formData.fam_phone} onChange={handleOneChange}></input>
                    </div>

                    <div>
                      <label className='form-label' htmlFor='address'>Address</label>
                      <input className='forminput form-control' type='text' id='address' name='address' value={formData.address} onChange={handleOneChange}></input>
                    </div>
                  </div>

                  <div style={{ display: 'flex' }}>
                    <div style={{ margin: 'auto 14px 0 0' }}>
                      <label className='form-label' htmlFor='history'>History</label>
                      <input className='forminput form-control' type='text' id='history' name='history' value={formData.history} onChange={handleOneChange}></input>
                    </div>

                    <div >
                      <label className='form-label' htmlFor='supervisor'>Supervisor</label>
                      <input className='forminput form-control' type='text' id='supervisor' name='supervisor' value={formData.supervisor} onChange={handleOneChange}></input>
                    </div>
                  </div>

                  <div style={{ display: 'flex' }}>
                    <div style={{ margin: 'auto 14px 0 0' }}>
                      <label className='form-label' htmlFor='sedation_level'>Sedation Level</label>
                      <input className='forminput form-control' type='text' id='sedation_level' name='sedation_level' value={formData.sedation_level} onChange={handleOneChange}></input>
                    </div>

                    <div >
                      <label className='form-label' htmlFor='medications'>Medications</label>
                      <input className='forminput form-control' type='text' id='medications' name='medications' value={formData.medications} onChange={handleOneChange}></input>
                    </div>
                  </div>

                  <div style={{ display: 'flex' }}>
                    <div style={{ margin: 'auto 14px 0 0' }}>
                      <label className='form-label' htmlFor='connected'>Connected</label>
                      <select className='forminput form-control' id='connected' name='connected' value={formData.connected} onChange={handleOneChange}>
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                      </select>
                    </div>
                    <div>
                      <label className='form-label' htmlFor='mode'>Ventilator Mode</label>
                      <input className='forminput form-control' type='text' id='mode' name='mode' value={formData.mode} onChange={handleOneChange}></input>
                    </div>
                  </div>

                  <div style={{ display: 'flex' }}>
                    <div style={{ margin: 'auto 14px 0 0' }}>
                      <label className='form-label' htmlFor='tidal_volume'>Tidal volume</label>
                      <input className='forminput form-control' type='text' id='tidal_volume' name='tidal_volume' value={formData.tidal_volume} onChange={handleOneChange}></input>
                    </div>
                    <div>
                      <label className='form-label' htmlFor='respiratory_rate'>Respiratory rate</label>
                      <input className='forminput form-control' type='text' id='respiratory_rate' name='respiratory_rate' value={formData.respiratory_rate} onChange={handleOneChange}></input>
                    </div>
                  </div>

                  <div style={{ display: 'flex' }}>
                    <div style={{ margin: 'auto 14px 0 0' }}>
                      <label className='form-label' htmlFor='peep'>PEEP</label>
                      <input className='forminput form-control' type='text' id='peep' name='peep' value={formData.peep} onChange={handleOneChange}></input>
                    </div>
                
                  </div>

                

                  <h4 class="hr-lines"> Test Results </h4>

                  
                  {formData.testResults.map((testResult, index) => (
                    <div className='TEST'>
                    <div key={index} style={{ display: 'flex' }}>
                      <div style={{ margin: 'auto 14px 0 0' }}>
                        <label className='form-label' htmlFor={`testName-${index}`}>TestName</label>
                        <input
                          className='forminput form-control'
                          type='text'
                          id={`testName-${index}`}
                          name='testName'
                          value={testResult.testName}
                          onChange={(e) => handleTestResultChange(e, index)}
                        />
                      </div>
                      <div style={{ margin: 'auto 14px 0 0' }}>
                        <label className='form-label' htmlFor={`result-${index}`}>Result</label>
                        <input
                          className='forminput form-control'
                          type='text'
                          id={`result-${index}`}
                          name='result'
                          value={testResult.result}
                          onChange={(e) => handleTestResultChange(e, index)}
                        />
                      </div>
                    
                      <div>
                      <label className='form-label' htmlFor={`date-${index}`}>Result Date</label>
                      <input
                        className='forminput form-control'
                        type='date'
                        id={`date-${index}`}
                        name='date'
                        value={testResult.date}
                        onChange={(e) => handleTestResultChange(e, index)}
                      />
                      </div>
                      </div>
                      </div>
                  ))}

                  

                  <button type="button" className="button-24" onClick={addTestResult}>Add Another Test</button>

                  

                  <button type="submit" className="btn submit-button addBtn" style={{display:'block' , marginTop:'10px' }}>Add</button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPatient;