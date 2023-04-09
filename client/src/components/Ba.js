
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

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    //Title,
    Tooltip,
    Legend,
);



function Ba({ sectorOptions, labelArr, dataArr, setSectorOption, labelString }) {
  
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

    return (<div style={{ margin: "10px", border: "1px solid #888888", borderRadius: "8px" }}>
        
        <div className='filter-container' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <p style={{ marginRight: "10px" }}>filter</p>

            <label htmlFor="sector">sector:</label>
            <select id="sector" name="sector" onChange={(e) => setSectorOption(e.target.value)} style={{backgroundColor:"#EEEEEE"}}>
                <option value={null}></option>
                {sectorOptions.map((sector, ind) => <option key={ind} value={sector} >{sector}</option>)}
            </select>
        </div>
        <h3 style={{ display: "flex", color: "#888888", justifyContent: "center" }}>{labelString}</h3>
        <Bar data={data} />
    </div>)
}

export default Ba;