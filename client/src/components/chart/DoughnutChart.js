
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutChart({ pestleDataArr, pestleLabelArr, labelString }) {
    const data = {
        labels: pestleLabelArr,
        datasets: [
            {
                label: '# of Votes',
                data: pestleDataArr,
                backgroundColor: [
                    "Red", "orange", "yellow", "green", "blue", "indigo", "violet"
                ],
                borderColor: [
                    "black"
                ],
                borderWidth: 0.5,
            },
        ],
    };

    return (<div  style={{display:"flex", justifyContent: "center", marginBottom:"50px" }}>
        <div className='pieChart'>
            <h3 style={{ display: "flex", color: "#888888", justifyContent: "center" }}>{labelString}</h3>
            <Doughnut data={data} />
        </div>
    </div>)
}

export default DoughnutChart;