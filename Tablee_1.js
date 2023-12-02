import AdsInsights from './AdsInsights';
//import DoughnutChart from './DoughnutChart';

function Tablee_1() {
  
    return (
        <div class="container">
        <div className='row'>
          
          <div className="col-sm-6">
           
        <table class="w3-table w3-bordered">
        <p>AdsInsights</p>
          <tr>
          
             
            <th>Campaigns v</th>
            <th>Clicks
            </th>
            <th>Cost</th>
            <th>Conversions</th>
            <th>Revenue</th>
          </tr>
          <tr>
            <td>Cosmeticsl</td>
            <td>712</td>
            <td>USD 4,272</td>
            <td>8 </td>
            <td>USD 16,568 </td>
          </tr>
          <tr>
            <td>Serums</td>
            <td>3,961</td>
            <td>USD 27,331</td>
            <td>115 </td>
            <td>USD 362,526 </td>
          </tr>
          <tr>
            <td>Facewash</td>
            <td>9,462</td>
            <td>USD 76,831</td>
            <td>123</td>
            <td>USD 266,800</td>
          </tr>
          <tr>
            <td>Shampoos</td>
            <td>439</td>
            <td>USD 2,151</td>
            <td>5</td>
            <td>USD 11,029 </td>
          </tr>
          <tr>
            <td>Conditioners</td>
            <td>1,680</td>
            <td>USD 3,864</td>
            <td> 49</td>
            <td>USD 175,245</td>
          </tr>
          <tr>
            <td>Facewash 2</td>
            <td>4,978</td>
            <td>USD 29,370</td>
            <td>189 </td>
            <td> USD 623,106</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>26,510</td>
            <td>USD 1,43,819</td>
            <td>189 </td>
            <td>USD 15,73,563 </td>
          </tr>
        </table>
      </div>
      
<div className="col-sm-6"> 
<AdsInsights/> 
</div>

</div>
      </div>

    )
}
    export default Tablee_1;  
 
