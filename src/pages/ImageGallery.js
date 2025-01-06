import img1 from '../images/educational/pva1.jpeg';
import img2 from '../images/educational/pva2.jpeg';
import img3 from '../images/educational/pva3.jpeg';
import React, { useState } from 'react';
import '../css/EducationalResources.css';
import Sidebar from "../components/sidebar";

const ImageGallery = () => {
  const [enlargedImage, setEnlargedImage] = useState(null);

  const openImage = (imageSrc) => {
    setEnlargedImage(imageSrc);
  };

  const closeImage = () => {
    setEnlargedImage(null);
  };

  return (
    <div className='app-container' style={{ backgroundColor: '#f7f7f7' }}>
      <Sidebar />


      <div className="gallery-container">
        <h2 className='imgH'>Educational Images</h2>
        <div className="gallery"> 
          <figure>
            <a href={img1} onClick={(e) => { e.preventDefault(); openImage(img1); }} data-caption="Caption for Image 1">
              <img src={img1} alt="Image 1" />
            </a>
            <figcaption>Monitoring Asynchrony During Invasive Mechanical Ventilation</figcaption>
          </figure>
          <figure>
            <a href={img2} onClick={(e) => { e.preventDefault(); openImage(img2); }} data-caption="Caption for Image 2">
              <img src={img2} alt="Image 2" />
            </a>
            <figcaption>Waveform detection of patient respiratory activity and minor asynchronies.</figcaption>
          </figure>
          <figure>
            <a href={img3} onClick={(e) => { e.preventDefault(); openImage(img3); }} data-caption="Caption for Image 3">
              <img src={img3} alt="Image 3" />
            </a>
            <figcaption>Detection of PVA from mechanical ventilation waveforms using a two-layer long short-term memory neural network </figcaption>
          </figure>
        </div>
        {enlargedImage && (
          <div className="modal">
            <button className="closeButton" onClick={closeImage}><i className="bx bx-x icon2"></i>
            </button>
            <img src={enlargedImage} alt="Enlarged Image" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageGallery;