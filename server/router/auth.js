const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");

router.use(bodyParser.json());

const itemModel = require("../model/schema");


//get the filter items
router.get('/filter', async (req, res) => {
    try {
        const topicArr = await itemModel.find({}, { "country": 1, "pestle": 1, "source": 1, "region": 1, "sector": 1, "topic": 1, "_id": 0 });
console.log(topicArr.length);
        res.status(200).send(topicArr);

    } catch (e) {
        console.log("e");
        res.status(400).send(e);
    }
});

//get the topics wise percentages value present in my data base
router.get('/topics-wise-percentage', async (req, res) => {
    try {
        const { sector } = req.query;
        if (!sector) {

            const topicArr = await itemModel.find({}, { "topic": 1, "_id": 0 });
            res.status(200).send(topicArr);
        } else {
            const topicArr = await itemModel.find({ sector: sector }, { "sector": 1, "topic": 1, "_id": 0, });
            res.status(200).send(topicArr);
        }


    } catch (e) {
        console.log("e");
        res.status(400).send(e);
    }
})

//get the sector wise Intensity percentages value present in my data base
router.get('/sector-wise-intensity', async (req, res) => {
    try {
        const { pestle } = req.query;
        if (!pestle) {
            const sectorIntensityArr = await itemModel.find({}, { "sector": 1, "intensity": 1, "_id": 0, });
            res.status(200).send(sectorIntensityArr);
        } else {
            const sectorIntensityArr = await itemModel.find({ pestle: pestle }, { "sector": 1, "intensity": 1, "_id": 0, });
            res.status(200).send(sectorIntensityArr);
        }


    } catch (e) {
        console.log(e);
        res.status(400).send(e);
    }
});

//get the each region present countries
router.get('/region-country', async (req, res) => {
    try {
        const regionCountryArr = await itemModel.find({ $or: [{ country: { $nin: [""] } }, { region: { $nin: [""] } }] }, { "country": 1, "region": 1, "_id": 0, });

        res.status(200).send(regionCountryArr);

    } catch (e) {
        console.log(e);
        res.status(400).send(e);
    }
});

//get the year  wise intensity Likelihood Relevance value present in my data base
router.get('/year-intensity-likelihood-relevance', async (req, res) => {
    try {
        const { country, region } = req.query;
        if (country) {
            const sectorIntensityArr = await itemModel.find({ $and: [{ start_year: { $nin: "" } }, { country: country }] }, { "start_year": 1, "relevance": 1, "intensity": 1, "country": 1, "likelihood": 1, "_id": 0, });
            res.status(200).send(sectorIntensityArr);
        }
        else if (region) {
            const sectorIntensityArr = await itemModel.find({ $and: [{ start_year: { $nin: "" } }, { region: region }] }, { "start_year": 1, "relevance": 1, "intensity": 1, "country": 1, "likelihood": 1, "_id": 0, });
            res.status(200).send(sectorIntensityArr);
        }
        else {
            console.log("none");
            const sectorIntensityArr = await itemModel.find({ start_year: { $nin: [""] } }, { "start_year": 1, "relevance": 1, "intensity": 1, "country": 1, "likelihood": 1, "_id": 0, });
            res.status(200).send(sectorIntensityArr);

        }

    } catch (e) {
        console.log(e);
        res.status(400).send(e);
    }
});

//get the pestle wise percentages value present in my data base
router.get('/pestle-wise-percentage', async (req, res) => {
    try {
        const pestleArr = await itemModel.find({}, { "pestle": 1, "_id": 0 });
        res.status(200).send(pestleArr);
    } catch (e) {
        console.log("e");
        res.status(400).send(e);
    }
})



module.exports = router;