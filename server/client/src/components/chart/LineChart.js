
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
import { useEffect, useState } from 'react';
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
    const { labelArr, intensityDataArr, relevanceDataArr, likelihoodDataArr, setCountry, labelString, filterArr, setRegionOption, regionOption } = props;
    // const { intensityLikelihoodRelevance, labelString, filterArr } = props;
    // const [allData, setAllData] = useState({
    //     intensityDataArr: [],
    //     likelihoodDataArr: [],
    //     relevanceDataArr: [],
    //     intensityLikelihoodRelevanceLabelArr: [],

    // })
    const countryOptions = [];
    const regionOptions = [];

    const n = filterArr.length;
    for (let i = 0; i < n; i++) {

        if (!regionOptions.includes(filterArr[i].region) && filterArr[i].region !== "") {
            regionOptions.push(filterArr[i].region);
        }

        if (!countryOptions.includes(filterArr[i].country) && filterArr[i].country !== "") {
            if (regionOption) {
                if (filterArr[i].region === regionOption) {
                    countryOptions.push(filterArr[i].country);
                }
            } else {
                countryOptions.push(filterArr[i].country);
            }
        }
    }

    // useEffect(() => {
    //     //create the map
    //     let yearMap = new Map();
    //     let n = intensityLikelihoodRelevance.length;
    //     for (let i = 0; i < n; i++) {
    //         let year = intensityLikelihoodRelevance[i].start_year;
    //         if (yearMap.has(year)) {
    //             let a = yearMap.get(year);
    //             let obj = { ...a, relevance: intensityLikelihoodRelevance[i].relevance + a.relevance, intensity: intensityLikelihoodRelevance[i].intensity + a.intensity, likelihood: intensityLikelihoodRelevance[i].likelihood + a.likelihood }
    //             yearMap.set(year, obj);
    //         } else {
    //             let nObj = { relevance: intensityLikelihoodRelevance[i].relevance, intensity: intensityLikelihoodRelevance[i].intensity, likelihood: intensityLikelihoodRelevance[i].likelihood }
    //             yearMap.set(year, nObj);
    //         }
    //     }

    //     let label = [], intensityData = [], relevanceData = [], likelihoodData = [];
    //     for (let tamp of yearMap.keys()) {
    //         label.push(tamp);
    //         let tampData = yearMap.get(tamp);
    //         intensityData.push(tampData.intensity);
    //         relevanceData.push(tampData.relevance);
    //         likelihoodData.push(tampData.likelihood);
    //     }
    //     //label.sort();
    //     return { label: label, intensityData: intensityData, relevanceData: relevanceData, likelihoodData: likelihoodData };
    // }, []);

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

    const regionHandel = (e) => {
        setCountry("");
        setRegionOption(e.target.value);
    }

    return (
        <div style={{ margin: "10px", border: "1px solid #888888", borderRadius: "8px" }}>
            <div className='filter-container' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <p style={{ marginRight: "10px" }}>filter</p>

                <label htmlFor="region">region:</label>
                <select id="region" name="region" onChange={regionHandel} style={{backgroundColor:"#EEEEEE"}}>
                    <option value={null}></option>
                    {regionOptions.map((region, ind) => <option key={ind} value={region}>{region}</option>)}
                </select>

                <label htmlFor="country">country:</label>
                <select id="country" name="country" onChange={(e) => setCountry(e.target.value)} style={{backgroundColor:"#EEEEEE"}}>
                    <option value={null}></option>
                    {countryOptions.map((country, ind) => <option key={ind} value={country} >{country}</option>)}
                </select>

            </div>
            <h3 style={{ display: "flex", color: "#888888", justifyContent: "center" }}>{labelString}</h3>
            <Line data={data} />
        </div>
    )
}

export default LineChart;