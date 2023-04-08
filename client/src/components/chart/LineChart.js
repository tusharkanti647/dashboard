
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


function LineChart(props) {
    const { labelArr, intensityDataArr, relevanceDataArr, likelihoodDataArr, labelString, filterArr } = props;
    const countryOptions = [];
    const regionOptions = [];
    const n = filterArr.length;
    for (let i = 0; i < n; i++) {
        if (!countryOptions.includes(filterArr[i].country) && filterArr[i].country!=="") {
            countryOptions.push(filterArr[i].country);
        }
        if(!regionOptions.includes(filterArr[i].country) && filterArr[i].region!=="") {
            regionOptions.push(filterArr[i].region);
        }
    }
    const data = {
        labels: labelArr,
        datasets: [
            {
                label: "intensity",
                data: intensityDataArr,
                backgroundColor: ["green"],
                borderColor: "green",
                borderWidth: "1",
            },
            {
                label: "relevance",
                data: relevanceDataArr,
                backgroundColor: ["red"],
                borderColor: "red",
                borderWidth: "1",
            },
            {
                label: "likelihood",
                data: likelihoodDataArr,
                backgroundColor: ["blue"],
                borderColor: "blue",
                borderWidth: "1",
            }

        ]
    }

    console.log(countryOptions);
    return (
        <div style={{ margin: "10px", border: "1px solid #888888", borderRadius: "8px" }}>
            <div className='filter-container' style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                <p style={{marginRight:"10px"}}>filter</p>

                <label for="country">country:</label>
                <select id="country" name="country">
                <option value={null}></option>
                    {countryOptions.map((country) => <option value={country}>{country}</option>)}
                </select>

                <label for="region">region:</label>
                <select id="region" name="region">
                <option value={null}></option>
                    {regionOptions.map((region) => <option value={region}>{region}</option>)}
                </select>

            </div>
            <h3 style={{ display: "flex", color: "#888888", justifyContent: "center" }}>{labelString}</h3>
            <Line data={data} />
        </div>
    )
}

export default LineChart;