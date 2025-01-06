import React from 'react';
import { Link,NavLink } from 'react-router-dom';
import { FaLungs, FaVideo, FaNewspaper, FaImage } from 'react-icons/fa';
import '../css/EducationalResources.css';
import Sidebar from "../components/sidebar";

const EducationalResources = () => {
  return (
    <div className='app-container' style={{backgroundColor:'#f7f7f7'}}>
      <Sidebar/>
    <div className='container5'>
      <div className='head'>
        <h1 className='educational1'>Educational Resources</h1>
      </div>

      
        {/* <div className="grid"> */}
          <div className="resource">
            <h2 className='educational2' > <FaLungs className="icon" />  PVA Detection</h2>
            <p className='resources'>A collection of resources on patient-ventilator asynchrony detection.</p>
            <div className="videos">
              <h3><FaVideo className="icon" /> Videos</h3>
              <ul>
                <li className="video"><Link to="/videos#introvideo">Introduction to Patient-Ventilator Asynchrony</Link></li>
                <li className="video"><Link to="/videos#videos">Types and Causes of Asynchrony</Link></li>
              </ul>
            </div>
            <div className="articles">
              <h3><FaNewspaper className="icon" /> Articles</h3>
              <ul>
                <li className="article"><Link to="/articles#article1">Detection and Management Strategies</Link></li>
                <li className="article"><Link to="/articles#article2">Impact on Patient Outcomes</Link></li>
              </ul>
            </div>
            <div className="images">
              <h3><FaImage className="icon" /> Images</h3>
              <NavLink to="/image-gallery">Images About Patient Ventilator asynchrony</NavLink>
            </div>
          </div>
        {/* </div> */}
      </div>
    </div>

    // </div>
  );
};

export default EducationalResources;