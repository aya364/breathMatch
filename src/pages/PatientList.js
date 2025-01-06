// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Close from '@material-ui/icons/Close';
// import styles from '../css/patientlist.css'
// import Sidebar from '../components/sidebar';
// // import '../css/mainDash.css';

// import $ from 'jquery';
// import 'popper.js';
// import 'bootstrap';

// // import "../css/stylecss.css";
// import 'boxicons/css/boxicons.min.css';


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faUser,faLock ,faEnvelope,faPlus, faEdit, faTrashAlt, faSearch} from '@fortawesome/free-solid-svg-icons'
// import { Link } from 'react-router-dom';


// // import 'bootstrap/dist/css/bootstrap.min.css'
// import '../vendors/feather/feather.css'
// import '../vendors/ti-icons/css/themify-icons.css'
// import '../vendors/css/vendor.bundle.base.css'

// axios.defaults.baseURL = "http://localhost:4000/";
// const PatientList = () => {
   
  
//   //////////////////////////////////////////////////////////

//     const [addSection, setAddSection] = useState(false);
//     const [editSection, setEditSection] = useState(false);
//     const [formData, setFormData] = useState({
//       p_name: "",
//       age: "",
//       fam_phone: "",
//       address: "",
//       room_num: "",
//       admission_date: "",
//       supervisor: "",
//       medical_recordNum: "",
//       diagnosis: "",
//       sedation_level: "",
//     });
//     const [formDataEdit, setFormDataEdit] = useState({
//       p_name: "",
//       age: "",
//       fam_phone: "",
//       address: "",
//       room_num: "",
//       admission_date: "",
//       supervisor: "",
//       medical_recordNum: "",
//       diagnosis: "",
//       sedation_level: "",
//       _id: "", 
//     });
//     const [dataList, setDataList] = useState([]);

    
  
//     const handleOneChange = (e) => {
//       const { value, name } = e.target;
//       setFormData((prev) => ({
//         ...prev,
//         [name]: value,
//       }));
//     };
  
//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       const data = await axios.post("/create", formData);
//       console.log(data);
//       if (data.data.success) {
//         setAddSection(false);
//         alert(data.data.message);
//         getFetchData(); // Refresh data list after successful creation
//       }
//     };
  
//     const getFetchData = async () => {
//       const data = await axios.get("/");
//       console.log(data);
//       if (data.data.success) {
//         setDataList(data.data.data);
//       }
//     };
  
//     useEffect(() => {
//       getFetchData();
//     }, []); // Fetch data on component mount
  
//     const handleDelete = async (id) => {
//       const data = await axios.delete("/delete/" + id);
//       if (data.data.success) {
//         getFetchData();
//         alert(data.data.message);
//       }
//     };
  

//     const handleUpdate = async (e) => {
//       e.preventDefault();
     
//         const { _id, ...rest } = formDataEdit;
//         const data = await axios.put("/update", { ...rest, _id });
//         if (data.data.success) {
//           setEditSection(false); // Close edit section
//           alert(data.data.message);
//           getFetchData(); // Refresh data list
//         } }




//     const handleEditOneChange = (e) => {
//       const { value, name } = e.target;
//       setFormDataEdit((prev) => ({
//         ...prev,
//         [name]: value,
//       }));
//     };
  
//     const handleEdit = async (el) => {
//       const { _id, ...rest } = el;
//       setFormDataEdit(el);
//       setEditSection(true);
//     };
    

//     ////////////////////////////////////////search//////////////////
//     const [search, setSearch] = useState('')
 

//   return (
//     <>
        
        
//       <div className="app-container" >
//       <Sidebar /> 
         
//   <div>

//      <div className="blue-div">
        
//         <button className="circle" onClick={()=>setAddSection(true)}> <FontAwesomeIcon icon={faPlus} /></button>       
//         <div className="search-box">
//           <input type="text" placeholder="Patient Table" onChange={(e) => setSearch(e.target.value)}  />
//           <span><FontAwesomeIcon icon={faSearch} className='search-icon' /></span>
//         </div>
//       </div>
//       {/* ////////////////////////////////////////////// */}
//     <div className="patient-list-container">
     

//       {
//         addSection &&(
//           <div className='add-container'>
            
        
//         <form className="patient-form" onSubmit={handleSubmit}>
//         <div className='close-btn' onClick={()=>setAddSection(false)}><Close /></div>
//         <h3 style={{color:'#5291ea'}}>Add new patient</h3>

//           <div style={{display:'flex'}}>
//             <div style={{margin:'auto 14px 0 0'}}>
//             <label className='form-label' htmlFor='p_name'> Name  </label>
//           <input className='forminput form-control' type='text' id='p_name' name='p_name' value={formData.p_name} onChange={handleOneChange}></input>
//             </div>

//           <div>
//           <label className='form-label' htmlFor='age'> Age  </label>
//           <input className='forminput form-control' type='text' id='age' name='age'  value={formData.age} onChange={handleOneChange}></input>
//           </div>
//           </div>
          

//           {/* <label className='form-label' htmlFor='fam_phone'> Contact Phone : </label>
//           <input className='forminput form-control' type='text' id='fam_phone' name='fam_phone' value={formData.fam_phone} onChange={handleOneChange}></input> */}

//           {/* <label className='form-label' htmlFor='address'> Address : </label>
//           <input className='forminput form-control' type='text' id='address' name='address' value={formData.address} onChange={handleOneChange}></input> */}
//             <div style={{display:'flex'}}>
//               <div style={{margin:'auto 14px 0 0'}}>
//           <label className='form-label' htmlFor='room_num'> Room Number  </label>
//           <input className='forminput form-control' type='text' id='room_num' name='room_num' value={formData.room_num} onChange={handleOneChange}></input>
//           </div>
//           <div>
//           <label className='form-label' htmlFor='admission_date'> Admission date  </label>
//           <input className='forminput form-control' type='date' id='admission_date' name='admission_date' value={formData.admission_date} onChange={handleOneChange}></input>
//             </div>
//             </div>
//           {/* <label className='form-label' htmlFor='supervisor'> Supervisor : </label>
//           <input className='forminput form-control' type='text' id='supervisor' name='supervisor' value={formData.supervisor} onChange={handleOneChange}></input> */}

//           <div style={{display:'flex'}}>
//           <div style={{margin:'auto 14px 0 0'}}>
//           <label className='form-label' htmlFor='medical_recordNum'> Medical recordNum  </label>
//           <input className='forminput form-control' type='text' id='medical_recordNum' name='medical_recordNum' value={formData.medical_recordNum} onChange={handleOneChange}></input>
//           </div>
//           <div>
//           <label className='form-label' htmlFor='diagnosis'> Diagnosis  </label>
//           <input className='forminput form-control' type='text' id='diagnosis' name='diagnosis' value={formData.diagnosis} onChange={handleOneChange}></input>
//           </div>
//           </div>
//           {/* <label className='form-label' htmlFor='sedation_level'> Sedation level : </label>
//           <input className='forminput form-control' type='text' id='sedation_level' name='sedation_level' value={formData.sedation_level} onChange={handleOneChange}></input> */}
//           <button className="submit-button" >Add</button>
//         </form>
//       </div>
//         )
//       }

//       {
//         editSection && (
//         <div className="add-container">
//         <form className="patient-form" onSubmit={handleUpdate}>
//           <div className="close-btn" onClick={() => setEditSection(false)}>
//             <Close />
//           </div>
//           <h3 style={{color:'#5291ea'}}>Edit patient data</h3>

//           <div style={{display:'flex'}}>
//           <div style={{margin:'auto 14px 0 0'}}>
//               <label className='form-label' htmlFor='p_name'> Name  </label>
//               <input className='forminput form-control' type='text' id='p_name' name='p_name' value={formDataEdit.p_name} onChange={handleEditOneChange}></input>
//              </div>
//              <div>

//           <label className='form-label' htmlFor='age'> Age  </label>
//           <input className='forminput form-control' type='text' id='age' name='age'  value={formDataEdit.age} onChange={handleEditOneChange}></input>
//           </div>
//           </div>

//           {/* <label className='formlabel' htmlFor='fam_phone'> Contact Phone : </label>
//           <input className='forminput' type='text' id='fam_phone' name='fam_phone' value={formDataEdit.fam_phone} onChange={handleEditOneChange}></input> */}

//           {/* <label className='formlabel' htmlFor='address'> Address : </label>
//           <input className='forminput' type='text' id='address' name='address' value={formDataEdit.address} onChange={handleEditOneChange}></input> */}
//           <div style={{display:'flex'}}>
//           <div style={{margin:'auto 14px 0 0'}}>
//           <label className='form-label' htmlFor='room_num'> Room Number  </label>
//           <input className='forminput form-control' type='text' id='room_num' name='room_num' value={formDataEdit.room_num} onChange={handleEditOneChange}></input>
//           </div>
//           <div>
//           <label className='forml-label' htmlFor='admission_date'> Admission date  </label>
//           <input className='forminput form-control' type='date' id='admission_date' name='admission_date' value={formDataEdit.admission_date} onChange={handleEditOneChange}></input>
//           </div>
//           </div>
//           {/* <label className='formlabel' htmlFor='supervisor'> Supervisor : </label>
//           <input className='forminput' type='text' id='supervisor' name='supervisor' value={formDataEdit.supervisor} onChange={handleEditOneChange}></input> */}
//           <div style={{display:'flex'}}>
//           <div style={{margin:'auto 14px 0 0'}}>
//           <label className='form-label' htmlFor='medical_recordNum'> Medical recordNum  </label>
//           <input className='forminput form-control' type='text' id='medical_recordNum' name='medical_recordNum' value={formDataEdit.medical_recordNum} onChange={handleEditOneChange}></input>
//           </div>
//           <div>
//           <label className='form-label' htmlFor='diagnosis'> Diagnosis  </label>
//           <input className='forminput form-control' type='text' id='diagnosis' name='diagnosis' value={formDataEdit.diagnosis} onChange={handleEditOneChange}></input>
//           </div>
//           </div>
//           {/* <label className='formlabel' htmlFor='sedation_level'> Sedation level : </label>
//           <input className='forminput' type='text' id='sedation_level' name='sedation_level' value={formDataEdit.sedation_level} onChange={handleEditOneChange}></input>*/}
//           <button className="submit-button" type="submit">Update</button> 
//         </form>
//       </div>
//         )
//       }


//      {/* <div className="table-container"> */}
   
// <table className='patient-table table-responsive'>
//   <thead id='headrow' >
//     <tr id='headrow' >
//       <th >ID</th>
//       <th >Name</th>
//       <th >Age</th>
//       {/* <th scope="col">Address</th> */}
//       {/* <th scope="col">Contact</th> */}
//       <th>Room number</th>
//       <th>Admission date</th>
//       {/* <th>Supervisor</th> */}
//       <th>Medical recordNo.</th>
//       <th>Diagnosis</th>
//       {/* <th>Sedation level</th> */}
//       <th></th>
//     </tr>
//   </thead>
//   <tbody>
//     {dataList.filter((el)=>{
//       return search.toLowerCase() === '' ? el :el.p_name.toLowerCase().includes(search)
//     }).map((el, index) => (
//       <tr key={el._id} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
//         <td>{index + 1}</td>
//         {/* <td>{el.p_name}</td> */}
//         <td>
//         <Link to={`/patient/${el._id}`}>{el.p_name}</Link>
//         </td>
//         <td>{el.age}</td>
//         {/* <td>{el.address}</td> */}
//         {/* <td>{el.fam_phone}</td> */}
//         <td>{el.room_num}</td>
//         {/* <td>{el.admission_date}</td> */}
//         <td>{new Date(el.admission_date).toLocaleDateString()}</td>
//         {/* <td>{el.supervisor}</td> */}
//         <td>{el.medical_recordNum}</td>
//         <td>{el.diagnosis}</td>
//         {/* <td>{el.sedation_level}</td> */}
//         <td className="actions-cell">
        
//         <button
//             onClick={() => { handleEdit(el); setEditSection(true); }}
//             style={{
//               background: 'none',
//               border: 'none',
//               padding: '5px 5px',
//               borderRadius: '5px',
//               cursor: 'pointer',
//               color: 'green',
//               fontSize: '16px',
//               transition: 'all 0.2s ease-in-out',
//             }}
//           >
//             <FontAwesomeIcon icon={faEdit} /> 
//           </button>
//           <button
//             onClick={() => handleDelete(el._id)}
//             style={{
//               background: 'none',
//               border: 'none',
//               padding: '5px 5px',
//               borderRadius: '5px',
//               cursor: 'pointer',
//               color: 'red',
//               fontSize: '16px',
//               transition: 'all 0.2s ease-in-out',
//             }}
//           >
//             <FontAwesomeIcon icon={faTrashAlt} /> 
//           </button>
          

//         </td>
//       </tr>
//     ))}
//   </tbody>
// </table>




//       </div>
//     </div>

// </div>


// {/* //////////////////////////////////////////////////////////////////////// */}

     
      
    


// </>
//   );
// };

// export default PatientList;
// PatientList.js





import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Close from '@material-ui/icons/Close';
import styles from '../css/patientlist.css'
import Sidebar from '../components/sidebar';

import 'boxicons/css/boxicons.min.css';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faLock ,faEnvelope,faPlus, faEdit, faTrashAlt, faSearch} from '@fortawesome/free-solid-svg-icons'
import { Link ,NavLink } from 'react-router-dom';
import '../vendors/feather/feather.css'
import '../vendors/ti-icons/css/themify-icons.css'
import '../vendors/css/vendor.bundle.base.css'

axios.defaults.baseURL = "http://localhost:4000/";
const PatientList = () => {

    const [addSection, setAddSection] = useState(false);
    const [editSection, setEditSection] = useState(false);
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
    peep: "",
    }); 
    const [formDataEdit, setFormDataEdit] = useState({
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
    _id: "", 
    });
    const [dataList, setDataList] = useState([]);

    const handleOneChange = (e) => {
      const { value, name } = e.target;
      setFormData((prev) => ({
        ...prev,
        // [name]: value,
        [name]: name === 'connected' ? (value === 'true') : value,
      }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const data = await axios.post("/create", formData);
      console.log(data);
      if (data.data.success) {
        setAddSection(false);
        alert(data.data.message);
        getFetchData(); 
      }
    };
  
    const getFetchData = async () => {
      const data = await axios.get("/");
      console.log(data);
      if (data.data.success) {
        setDataList(data.data.data);
      }
    };

    useEffect(() => {
      getFetchData();
    }, []); 
  
    const handleDelete = async (id) => {
      const data = await axios.delete("/delete/" + id);
      if (data.data.success) {
        getFetchData();
        alert(data.data.message);
      }
    };

    const handleUpdate = async (e) => {
      e.preventDefault();
     
        const { _id, ...rest } = formDataEdit;
        const data = await axios.put("/update", { ...rest, _id });
        if (data.data.success) {
          setEditSection(false); 
          alert(data.data.message);
          getFetchData(); 
        } }




    const handleEditOneChange = (e) => {
      const { value, name } = e.target;
      setFormDataEdit((prev) => ({
        ...prev,
        [name]: value,
      }));
    };
  
    const handleEdit = async (el) => {
      const { _id, ...rest } = el;
      setFormDataEdit(el);
      setEditSection(true);
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
    

    const [search, setSearch] = useState('')

  return (
    <>
        
      <div className="app-container" > 
    
      <Sidebar />

        <div className='blueMain'>
     <div className="blue-div">
     <NavLink className="circle" to="/add-patient"><FontAwesomeIcon icon={faPlus} className='circlei' /></NavLink>
        {/* <button className="circle" onClick={()=>setAddSection(true)}> <FontAwesomeIcon icon={faPlus} /></button>        */}
        <div className="search-box">
          <input type="text" placeholder="Patient Table" onChange={(e) => setSearch(e.target.value)}  />
          <span><FontAwesomeIcon icon={faSearch} className='search-icon' /></span>
        </div>
      </div>  

      {
        addSection &&(
          <div className='add-container'>
            
        
        <form className="patient-form" onSubmit={handleSubmit}>
        <div className='close-btn' onClick={()=>setAddSection(false)}><Close /></div>
        <h3 style={{color:'#5291ea'}}>Add new patient</h3>

          <div style={{display:'flex'}}>
            <div style={{margin:'auto 14px 0 0'}}>
            <label className='form-label' htmlFor='p_name'> Name  </label>
          <input className='forminput form-control' type='text' id='p_name' name='p_name' value={formData.p_name} onChange={handleOneChange}></input>
            </div>

          <div>
          <label className='form-label' htmlFor='age'> Age  </label>
          <input className='forminput form-control' type='text' id='age' name='age'  value={formData.age} onChange={handleOneChange}></input>
          </div>
          </div>
      
          
            <div style={{display:'flex'}}>
              <div style={{margin:'auto 14px 0 0'}}>
          <label className='form-label' htmlFor='room_num'> Room Number  </label>
          <input className='forminput form-control' type='text' id='room_num' name='room_num' value={formData.room_num} onChange={handleOneChange}></input>
          </div>
          <div>
          <label className='form-label' htmlFor='admission_date'> Admission date  </label>
          <input className='forminput form-control' type='date' id='admission_date' name='admission_date' value={formData.admission_date} onChange={handleOneChange}></input>
            </div>
            </div>
         
          <div style={{display:'flex'}}>
          <div style={{margin:'auto 14px 0 0'}}>
          <label className='form-label' htmlFor='medical_recordNum'> Medical recordNum  </label>
          <input className='forminput form-control' type='text' id='medical_recordNum' name='medical_recordNum' value={formData.medical_recordNum} onChange={handleOneChange}></input>
          </div>
          <div>
          <label className='form-label' htmlFor='diagnosis'> Diagnosis  </label>
          <input className='forminput form-control' type='text' id='diagnosis' name='diagnosis' value={formData.diagnosis} onChange={handleOneChange}></input>
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
                  </div>
          
          <button className="submit-button" >Add</button>
        </form>
      </div>
        )
      }

      {
        editSection && (
        <div className="add-container">
        <form className="patient-form" onSubmit={handleUpdate}>
          <div className="close-btn" onClick={() => setEditSection(false)}>
            <Close />
          </div>
          <h3 style={{color:'#5291ea'}}>Edit patient data</h3>

          <div style={{display:'flex'}}>
          <div style={{margin:'auto 14px 0 0'}}>
              <label className='form-label' htmlFor='p_name'> Name  </label>
              <input className='forminput form-control' type='text' id='p_name' name='p_name' value={formDataEdit.p_name} onChange={handleEditOneChange}></input>
             </div>
             <div>

          <label className='form-label' htmlFor='age'> Age  </label>
          <input className='forminput form-control' type='text' id='age' name='age'  value={formDataEdit.age} onChange={handleEditOneChange}></input>
          </div>
          </div>

          
          <div style={{display:'flex'}}>
          <div style={{margin:'auto 14px 0 0'}}>
          <label className='form-label' htmlFor='room_num'> Room Number  </label>
          <input className='forminput form-control' type='text' id='room_num' name='room_num' value={formDataEdit.room_num} onChange={handleEditOneChange}></input>
          </div>
          <div>
          <label className='forml-label' htmlFor='admission_date'> Admission date  </label>
          <input className='forminput form-control' type='date' id='admission_date' name='admission_date' value={formDataEdit.admission_date} onChange={handleEditOneChange}></input>
          </div>
          </div>
          
          <div style={{display:'flex'}}>
          <div style={{margin:'auto 14px 0 0'}}>
          <label className='form-label' htmlFor='medical_recordNum'> Medical recordNum  </label>
          <input className='forminput form-control' type='text' id='medical_recordNum' name='medical_recordNum' value={formDataEdit.medical_recordNum} onChange={handleEditOneChange}></input>
          </div>
          <div>
          <label className='form-label' htmlFor='diagnosis'> Diagnosis  </label>
          <input className='forminput form-control' type='text' id='diagnosis' name='diagnosis' value={formDataEdit.diagnosis} onChange={handleEditOneChange}></input>
          </div>
          </div>

          <div style={{ display: 'flex' }}>
                    <div style={{ margin: 'auto 14px 0 0' }}>
                      <label className='form-label' htmlFor='connected'>Connected</label>
                      <select className='forminput form-control' id='connected' name='connected' value={formDataEdit.connected} onChange={handleEditOneChange}>
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                      </select>
                    </div>
                  </div>
          
          <button className="submit-button" type="submit">Update</button> 
        </form>
      </div>
        )
      }


<div className="tabContainer">

   
<table className='test-table '>
  <thead >
    <tr >
      <th >ID</th>
      <th >Name</th>
      <th >Age</th>
  
      <th>Room number</th>
      <th>Admission date</th>
      <th>Medical recordNo.</th>
      <th>Connected</th>
      <th>Diagnosis</th>
      <th></th>
    </tr>
  </thead>
  <tbody className="table-border-bottom-0">
    {dataList.filter((el)=>{
      return search.toLowerCase() === '' ? el :el.p_name.toLowerCase().includes(search)
    }).slice().reverse().map((el, index) => (
      <tr key={el._id} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
        <td>{index + 1}</td>
        <td>
        <Link to={`/patient/${el._id}`}>{el.p_name}</Link>
        </td>
        <td>{el.age}</td>
        <td>{el.room_num}</td>
        <td>{new Date(el.admission_date).toLocaleDateString()}</td>
        <td>{el.medical_recordNum}</td>
        <td>{el.connected ? (
      <FaCheckCircle style={{ color: 'green' }} /> 
    ) : (
      <FaTimesCircle style={{ color: 'red' }} />
    )}</td>
        <td>{el.diagnosis}</td>
        <td className="actions-cell">
        
        <Link to={`/patient/${el._id}`}>
        <button
            /*onClick={() => { handleEdit(el); setEditSection(true); }}*/
            style={{
              background: 'none',
              border: 'none',
              padding: '5px 5px',
              borderRadius: '5px',
              cursor: 'pointer',
              color: 'green',
              fontSize: '16px',
              transition: 'all 0.2s ease-in-out',
            }}
          >
            <FontAwesomeIcon icon={faEdit} /> 
          </button>
          </Link>

          <button
            onClick={() => handleDelete(el._id)}
            style={{
              background: 'none',
              border: 'none',
              padding: '5px 5px',
              borderRadius: '5px',
              cursor: 'pointer',
              color: 'red',
              fontSize: '16px',
              transition: 'all 0.2s ease-in-out',
            }}
          >
            <FontAwesomeIcon icon={faTrashAlt} /> 
          </button>
          

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

export default PatientList;
