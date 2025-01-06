import React from 'react';
import loagimg from '../assets/2.png';
import '../css/preload.css';
import '../css/mainDash.css';
import '../vendors/scripts/process';


const PreLoading = () => {
  return (
    <div className="pre-loader">
      <div className="pre-loader-box">
        <div className="loader-logo">
          <img src={loagimg} className='loaderimgs' alt="loagimg" />
        </div>
        <div className='loader-progress' id="progress_div">
          <div className='bar' id='bar1'></div>
        </div>
        <div className='percent' id='percent1'>0%</div>
        <div className="loading-text">
          Loading...
        </div>
      </div>
    </div>
  );
};

export default PreLoading;
