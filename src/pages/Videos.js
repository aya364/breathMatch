import React from 'react';
import '../css/EducationalResources.css';
import Sidebar from "../components/sidebar";
import vid1 from '../images/educational/video1.mp4'
import vid2 from '../images/educational/video2.mp4'


const Videos = () => {
    return (
        <>
        <div className='app-container' style={{ backgroundColor: '#f7f7f7' }}>
        <Sidebar />
            {/* <section id="introvideo">
                <h1 className='educational'>Introduction to Patient-Ventilator Asynchrony</h1>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID_HERE" frameborder="0" allowfullscreen></iframe>
            </section> */}

            <section id="videos">

                <div className='ifram'>
                <h1 className='educational'>Introduction to Patient-Ventilator Asynchrony</h1>
                <iframe width="360" height="315" src="https://www.youtube.com/embed/4aKrQSbjwfI?si=37PtaYo3V9NccxFy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                </div>
                {/* <h1 className='educational'>Videos</h1> */}
                <div className='vidFlex'>
                <video width="400" height="300" controls>
                    <source src={vid1} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <video width="400" height="300" controls>
                    <source src={vid2} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                </div>
                
            </section>
            </div>
        </>
    );
}

export default Videos;