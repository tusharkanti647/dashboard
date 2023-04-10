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

function BarChart({pestleOptions, labelArr, dataArr, labelString, setPestleOption }) {

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

    //console.log(sectorOptions);
    return (<>
        <div style={{ margin: "10px", border: "1px solid #888888", borderRadius: "8px" }}>

            <div className='filter-container' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <p style={{ marginRight: "10px" }}>filter</p>

                <label htmlFor="pestle">Pestle:</label>
                <select id="pestle" name="pestle" onChange={(e) => setPestleOption(e.target.value)} style={{backgroundColor:"#EEEEEE"}}>
                    <option value={null}></option>
                    {pestleOptions.map((sector, ind) => <option key={ind} value={sector} >{sector}</option>)}
                </select>
            </div>

            <h3 style={{ display: "flex", color: "#888888", justifyContent: "center" }}>{labelString}</h3>
            <Bar data={data} />
        </div>

    </>)
}

export default BarChart;