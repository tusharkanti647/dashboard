import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';
//import faker from 'faker';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
);

function PieChart({ sectorDataArr, sectorLabelArr, labelString }) {

    const data = {
        labels: sectorLabelArr,
        datasets: [
            {
                // label: { labelString},
                data: sectorDataArr,
                backgroundColor: ["red", "green", "yellow", "blue", "green", "purple", "brown"],
                borderColor: "black",
                borderWidth: "0.1",

            },


        ]
    }

    const options = {

    }

    return (<>
        <div className='pieChart' >
            <h3  style={{display:"flex", fontSize:"15px", color: "#888888", justifyContent: "center" }}>{labelString}</h3>
            <Pie data={data} />
        </div>

    </>)
}

export default PieChart;