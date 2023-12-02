import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Chart from 'react-google-charts'
const pieData = [
  ['Task', 'Hours per Day'],
  ['Male', 40],
  ['Female', 35],
  ['Unknown',25],
  
]
const pieOptions = {
  title: '',
  pieHole: 0.4,
}
class DoughnutChart extends Component {
  render() {
    return (
      <div className="container mt-5">
        
        <Chart
          width={'600px'}
          height={'320px'}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={pieData}
          options={pieOptions}
          rootProps={{ 'data-testid': '3' }}
        />
      </div>
    )
  }
}
export default DoughnutChart;