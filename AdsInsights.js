// AdsInsights.js
import React, { useState } from 'react';
import DoughnutChart from './DoughnutChart';
import Tablee from './Tablee';

function AdsInsights() {
  const [showChart, setShowChart] = useState(true);
  
  
  const handleToggle = () => {
    setShowChart(!showChart);
  };
 
  return (
    <div class1="w3-container w3-half">
     
     

      {showChart && (
        <div>
          <DoughnutChart/> 
        </div>
      )}
       <button onClick={handleToggle}>
        {showChart ? 'Hide Chart' : 'Show Chart'}
      </button>


      {<div class1="w3-container w3-half">
          <Tablee/> 
        </div>}
    </div>
  );
}

export default AdsInsights;

