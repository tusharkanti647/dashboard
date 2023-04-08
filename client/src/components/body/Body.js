import { useLayoutEffect, useState } from "react";
import BarChart from "../chart/BarChart";
import PieChart from "../chart/PieChart";
import PolarAreaChart from "../chart/PolarAreaChart";
import "./Body.css";
import LineChart from "../chart/LineChart";



function Body() {
    const [filterArr, setFilterArr] = useState([]);
    const [sector, setSector] = useState({
        sectorLabelArr: [],
        sectorDataArr: [],
    });
    const [topicBar, setTopicBar] = useState({
        labelArr: [],
        dataArr: [],
    });
    const [sectorIntensity, setSectorIntensity] = useState({
        sectorIntensityLabelArr: [],
        sectorIntensityDataArr: [],
    });
    const [regionCountry, setRegionCountry] = useState({
        regionCountryLabelArr: [],
        regionCountryDataArr: [],
    });
    const [intensityLikelihoodRelevance, setIntensityLikelihoodRelevance] = useState({
        intensityLikelihoodRelevanceLabelArr: [],
        intensityDataArr: [],
        likelihoodDataArr: [],
        relevanceDataArr: [],
    });


    const fetchFun = async (url) => {

        try {
            let label = [], data = [];
            const topicRespons = await fetch(url);
            const topicData = await topicRespons.json();

            //create the reasul topic map
            let topicMap = new Map();
            let n = topicData.length;

            for (let i = 0; i < n; i++) {
                let topic = topicData[i].topic;
                if (topicMap.has(topic)) {
                    let a = topicMap.get(topic);
                    topicMap.set(topic, a + 1);
                } else {
                    topicMap.set(topic, 1);
                }
            }
            //setTopicArr([...topicMap]);

            for (let vegetable of topicMap.keys()) {
                label.push(vegetable);
                data.push(topicMap.get(vegetable)) // cucumber, tomatoes, onion
            }
            return { label: label, data: data };

        } catch (err) {
            console.log(err);
        }
    }

    const fetchFunTwoParameters = async (url) => {
        try {
            const topicRespons = await fetch(url);
            const topicData = await topicRespons.json();

            //create the map
            let topicMap = new Map();
            let n = topicData.length;
            for (let i = 0; i < n; i++) {
                let topic = topicData[i].sector;
                if (topicMap.has(topic)) {
                    let a = topicMap.get(topic);
                    topicMap.set(topic, a + topicData[i].intensity);
                } else {
                    topicMap.set(topic, topicData[i].intensity);
                }
            }

            let label = [], data = [];
            for (let vegetable of topicMap.keys()) {
                label.push(vegetable);
                data.push(topicMap.get(vegetable)) // cucumber, tomatoes, onion
            }
            return { label: label, data: data };

        } catch (err) {
            console.log(err);
        }
    }

    const fetchFunRegionCountry = async (url) => {
        try {
            const topicRespons = await fetch(url);
            const topicData = await topicRespons.json();

            //create the map
            let topicMap = new Map();
            let n = topicData.length;
            for (let i = 0; i < n; i++) {
                let topic = topicData[i].region;
                if (topicMap.has(topic)) {
                    let arr = topicMap.get(topic);
                    let flag = (arr.includes(topicData[i].country));
                    //console.log(!flag);
                    if (flag === false && topicData[i].country !== "") {
                        arr.push(topicData[i].country);
                        topicMap.set(topic, arr);
                    }
                } else {
                    let nArr = [];
                    nArr.push(topicData[i].country);
                    topicMap.set(topic, nArr);
                }
            }

            let label = [], data = [];
            for (let vegetable of topicMap.keys()) {
                label.push(vegetable);
                let arr = topicMap.get(vegetable);
                data.push(arr.length) // cucumber, tomatoes, onion
            }
            return { label: label, data: data };

        } catch (err) {
            console.log(err);
        }
    }

    const fetchFunIntensityLikelihoodRelevance = async (url) => {
        try {
            const topicRespons = await fetch(url);
            const topicData = await topicRespons.json();
            topicData.sort((a, b) => a.start_year - b.start_year);

            //create the map
            let yearMap = new Map();
            let n = topicData.length;
            for (let i = 0; i < n; i++) {
                let year = topicData[i].start_year;
                if (yearMap.has(year)) {
                    let a = yearMap.get(year);
                    let obj = { ...a, relevance: topicData[i].relevance + a.relevance, intensity: topicData[i].intensity + a.intensity, likelihood: topicData[i].likelihood + a.likelihood }
                    yearMap.set(year, obj);
                } else {
                    let nObj = { relevance: topicData[i].relevance, intensity: topicData[i].intensity, likelihood: topicData[i].likelihood }
                    yearMap.set(year, nObj);
                }
            }


            let label = [], intensityData = [], relevanceData = [], likelihoodData = [];
            for (let tamp of yearMap.keys()) {
                label.push(tamp);
                let tampData = yearMap.get(tamp);
                intensityData.push(tampData.intensity);
                relevanceData.push(tampData.relevance);
                likelihoodData.push(tampData.likelihood);
            }
            //label.sort();
            return { label: label, intensityData: intensityData, relevanceData: relevanceData, likelihoodData: likelihoodData };

        } catch (err) {
            console.log(err);
        }
    }

    useLayoutEffect(() => {
        const fetchCall = async () => {
            const filterRespons = await fetch("http://localhost:5000/filter");
            const filterData = await filterRespons.json();
            setFilterArr([...filterData]);

            const barObj = await fetchFun("http://localhost:5000/topics-wise-percentage");
            setTopicBar({ ...topicBar, dataArr: barObj.data, labelArr: barObj.label });

            const SectorbarObj = await fetchFun("http://localhost:5000/topics-wise-percentage");
            setSector({ ...sector, sectorDataArr: SectorbarObj.data, sectorLabelArr: SectorbarObj.label });

            const sectorIntensitybarObj = await fetchFunTwoParameters("http://localhost:5000/sector-wise-intensity");
            setSectorIntensity({ ...sectorIntensity, sectorIntensityDataArr: sectorIntensitybarObj.data, sectorIntensityLabelArr: sectorIntensitybarObj.label });

            const regionCountrybarObj = await fetchFunRegionCountry("http://localhost:5000/region-country");
            setRegionCountry({ ...regionCountry, regionCountryDataArr: regionCountrybarObj.data, regionCountryLabelArr: regionCountrybarObj.label });

            const intensityLikelihoodRelevanceObj = await fetchFunIntensityLikelihoodRelevance("http://localhost:5000/year-intensity-likelihood-relevance");
            setIntensityLikelihoodRelevance({ ...intensityLikelihoodRelevance, intensityLikelihoodRelevanceLabelArr: intensityLikelihoodRelevanceObj.label, intensityDataArr: intensityLikelihoodRelevanceObj.intensityData, likelihoodDataArr: intensityLikelihoodRelevanceObj.likelihoodData, relevanceDataArr: intensityLikelihoodRelevanceObj.relevanceData });
        }
        fetchCall();
    }, []);

    //console.log(intensityLikelihoodRelevance.intensityLikelihoodRelevanceLabelArr);
    return (<>
        <BarChart labelArr={topicBar.labelArr} dataArr={topicBar.dataArr} labelString="Topics wise value present in my data base" />
        <div className="piechart-polarChart" >
            <PieChart sectorDataArr={sector.sectorDataArr} sectorLabelArr={sector.sectorLabelArr} labelString="Get the sector wise value present in my data base" />
            <PolarAreaChart labelArr={regionCountry.regionCountryLabelArr} dataArr={regionCountry.regionCountryDataArr} labelString="Region wise how many Country present in my data base" />
        </div>
        <BarChart labelArr={sectorIntensity.sectorIntensityLabelArr} dataArr={sectorIntensity.sectorIntensityDataArr} labelString="showing the sector wise Intensity value present in my data base" />
        <LineChart labelArr={intensityLikelihoodRelevance.intensityLikelihoodRelevanceLabelArr}
            intensityDataArr={intensityLikelihoodRelevance.intensityDataArr}
            relevanceDataArr={intensityLikelihoodRelevance.relevanceDataArr}
            likelihoodDataArr={intensityLikelihoodRelevance.likelihoodDataArr} 
            filterArr={filterArr}  labelString="Year vs Intensity, Likelihood, Relevance Line graph" />
    </>)
}

export default Body;