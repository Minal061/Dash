
import React, { useState } from 'react';
function Tablee() {
  const [showChart1, setShowChart1] = useState(true);
 
  const handleToggle = () => {
    setShowChart1(!showChart1);
  };

  
  return (
    <div>
     
     
     

      {showChart1 && (
        <div>
         <div className="App">
    <table>
        <tr>
            <th>Group v</th>
            <th>Clicks</th>
            <th>Cost</th>
            <th>Conversions</th>
            <th>Revenue</th>
        </tr>
        <tr>
            <td>Male</td>
            <td>348</td>
            <td>USD 12,528</td>
            <td>42</td>
            <td>USD 62,118</td>
        </tr>
        <tr>
            <td>Female</td>
            <td>692</td>
            <td>USD 24,912</td>
            <td>35</td>
            <td>USD 5,175</td>
        </tr>
        <tr>
            <td>Unknown</td>
            <td>105</td>
            <td>USD 3,943</td>
            <td>3</td>
            <td>USD 4,489</td>
        </tr>
        <tr>
            <td>Total</td>
            <td>1,145</td>
            <td>USD 41,383</td>
            <td>80 </td>
            <td>USD 71782 </td>
          </tr>
    </table> <button onClick={handleToggle}>
        {showChart1 ? 'Hide Chart' : 'Show Chart1'}
      </button>

</div>
        </div>
      )}

     
    </div>
  );
}
export default Tablee;