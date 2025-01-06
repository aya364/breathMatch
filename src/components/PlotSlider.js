// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';
// import '../css/Upload.css';
// function PlotSlider({ pvaPositions }) {
//   const [plots, setPlots] = useState([]);
//   const [alertShown, setAlertShown] = useState(false);
//   const [allPlotsFetched, setAllPlotsFetched] = useState(false);
//   const [totalPlots, setTotalPlots] = useState(0);
//   const [fetchedPlotsCount, setFetchedPlotsCount] = useState(0);

//   useEffect(() => {
//     const fetchPlots = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/plots');
//         if (response.data && response.data.plots) {
//           setPlots(response.data.plots);
//           setTotalPlots(response.data.plots.length);
//           if (response.data.plots.length === pvaPositions.length) {
//             setAllPlotsFetched(true);
//           }
//         }
//       } catch (error) {
//         console.error('Error fetching plots:', error);
//       }
//     };

//     fetchPlots();
//     const intervalId = setInterval(fetchPlots, 5000);

//     return () => clearInterval(intervalId);
//   }, [pvaPositions.length]);

//   useEffect(() => {
//     if (!alertShown && pvaPositions.length > 0) {
//       const alertSound = document.getElementById('alert-sound');
//       alertSound.play();
//       alertSound.volume = 1;

//       pvaPositions.forEach(index => {
//         alert(`Plot ${index + 1} has PVA!`);
//       });

//       setAlertShown(true);
//     }
//   }, [plots, pvaPositions, alertShown]);

//   useEffect(() => {
//     if (totalPlots > 0 && fetchedPlotsCount === totalPlots) {
//       clearInterval(intervalId);
//     }
//   }, [totalPlots, fetchedPlotsCount]);

//   return (
//     <div className="slider-container">
//       <h2>Plots</h2>
//       <div className="slider">
//         {plots.map((plot, index) => (
//           <div className="slider-item" key={index}>
//             <p>Breath {index + 1}</p>
//             <img src={`data:image/png;base64,${plot}`} alt={`Plot ${index + 1}`} />
//           </div>
//         ))}
//       </div>
//       {alertShown && pvaPositions.length > 0 && (
//         <div className="pva-message">
//           <p>The following plots have PVA: {pvaPositions.map(index => index + 1).join(', ')}</p>
//         </div>
//       )}
      
//     </div>
//   );
// }

// export default PlotSlider;
//********************************************************************
//************************************************************* 
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import '../css/Upload.css'; 

function PlotSlider({ pvaPositions }) {
  const [plots, setPlots] = useState([]);
  const [alertShown, setAlertShown] = useState(false);
  const [allPlotsFetched, setAllPlotsFetched] = useState(false);
  const [totalPlots, setTotalPlots] = useState(0);
  const [fetchedPlotsCount, setFetchedPlotsCount] = useState(0);
  const intervalIdRef = useRef(null); 

  useEffect(() => {
    const fetchPlots = async () => {
      try {
        const response = await axios.get('http://localhost:5000/plots');
        if (response.data && response.data.plots) {
          setPlots(response.data.plots);
          setTotalPlots(response.data.plots.length);
          if (response.data.plots.length === pvaPositions.length) {
            setAllPlotsFetched(true);
          }
        }
      } catch (error) {
        console.error('Error fetching plots:', error);
      }
    };

    fetchPlots();
    intervalIdRef.current = setInterval(fetchPlots, 5000); 

    return () => clearInterval(intervalIdRef.current); 
  }, [pvaPositions.length]);

  useEffect(() => {
    if (!alertShown && pvaPositions.length > 0) {
      const alertSound = document.getElementById('alert-sound');
      alertSound.play();
      alertSound.volume = 1;

      pvaPositions.forEach(index => {
        alert(`Plot ${index + 1} has PVA!`);
      });

      setAlertShown(true);
    }
  }, [plots, pvaPositions, alertShown]);

  useEffect(() => {
    if (totalPlots > 0 && fetchedPlotsCount === totalPlots) {
      clearInterval(intervalIdRef.current); // Clear interval using useRef
    }
  }, [totalPlots, fetchedPlotsCount]);

  return (
    <div className="slider-container">
      <h2>Plots</h2>
      {/* <div className="slider">
        {plots.map((plot, index) => (
          <div className="slider-item" key={index}>
            <p>Breath {index + 1}</p>
            <img src={`data:image/png;base64,${plot}`} alt={`Plot ${index + 1}`} />
          </div>
        ))}
      </div> */}

{plots.length > 0 ? (
  <div className="slider">
    {plots.map((plot, index) => (
      <div className="slider-item" key={index}>
        <p>Breath {index + 1}</p>
        <img src={`data:image/png;base64,${plot}`} alt={`Plot ${index + 1}`} />
      </div>
    ))}
  </div>
) : (
  <p>No plots to display.</p>
)}

      {alertShown && pvaPositions.length > 0 && (
        <div className="pva-message">
          <p>The following plots have PVA: {pvaPositions.map(index => index + 1).join(', ')}</p>
        </div>
      )}
    </div>
  );
}

export default PlotSlider;
