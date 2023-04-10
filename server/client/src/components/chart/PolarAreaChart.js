import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);



export function PolarAreaChart({ labelArr, dataArr, labelString }) {
  const data = {
    labels: labelArr,
    datasets: [
      {
        label: '# of Votes',
        data: dataArr,
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
          'rgb(255, 99, 195, 0.5)',
          'rgb(54, 235, 235, 0.5)',
          'rgb(86, 255, 100, 0.5)',
          'rgb(130, 102, 255, 0.5)',
          'rgb(210, 255, 64, 0.5)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (<div className='polarAreaChart' >
    <h3  style={{display:"flex", fontSize:"15px", color: "#888888", justifyContent: "center" }}>{labelString}</h3>
    <PolarArea data={data} />
  </div>)
}

export default PolarAreaChart;

