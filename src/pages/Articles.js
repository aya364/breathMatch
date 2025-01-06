import React from 'react';
import '../css/EducationalResources.css';
import Sidebar from "../components/sidebar";

const Articles = () => {
    return (
        <>

<div className='app-container' style={{ backgroundColor: '#f7f7f7' }}>
<Sidebar />
            
                <div>
                <h1 className='articleH'>Articles</h1>
                <section id="article1">
                <article>
                    <h2 className='educational2'>Patient-ventilator asynchrony</h2>
                    <p className='resources' style={{color:'gray'}}>The basic mechanism of patient-ventilator asynchrony is the mismatching between neural inspiratory and mechanical inspiratory time. Alterations in respiratory drive, timing, respiratory muscle pressure, and respiratory system mechanics influence the interaction between the patient and the ventilator...</p>
                    <a href='https://pubmed.ncbi.nlm.nih.gov/11373508/' target='_blank' rel='noopener noreferrer'>
                    <i className='bx bx-chevron-right toggle'></i>
                    </a>

                </article>
            </section>
        
            <section id="article2">
                <article>
                    <h2 className='educational2'>Patient-ventilator asynchrony during assisted mechanical ventilation</h2>
                    <p className='resources'  style={{color:'gray'}}>The incidence, pathophysiology, and consequences of patient-ventilator asynchrony are poorly known. We assessed the incidence of patient-ventilator asynchrony during assisted mechanical ventilation and we identified associated factors...</p>
                    <a href='https://pubmed.ncbi.nlm.nih.gov/16896854/' target='_blank' rel='noopener noreferrer'>
                    <i className='bx bx-chevron-right toggle'></i>
                    </a>
                </article>
            </section>

                </div>
            

            </div>
        </>
    );
}

export default Articles;