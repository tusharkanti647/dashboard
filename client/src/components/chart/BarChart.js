import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    //Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';
//import faker from 'faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    //Title,
    Tooltip,
    Legend,
);

function BarChart({ labelArr, dataArr, labelString }) {

    const data = {
        labels: labelArr,
        datasets: [
            {
                label: "bar showing the values",
                data: dataArr,
                backgroundColor: ["red", "green", "yellow", "blue", "green", "purple", "brown"],
                borderColor: "black",
                borderWidth: "1",
            }
        ]
    }

    const options = {

    }

    return (<>
        <div style={{margin:"10px", border:"1px solid #888888", borderRadius:"8px"}}>
        <h3 style={{display:"flex", color:"#888888", justifyContent:"center"}}>{labelString}</h3>
            <Bar

                options={options} data={data} />
        </div>

    </>)
}

export default BarChart;