const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");

router.use(bodyParser.json());

const { itemModel } = require("../model/schema");


//demo routes
router.get('/demo', (req, res) => {
    res.render('this is a demo page');
});




module.exports = router;