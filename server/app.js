const dotenv = require("dotenv");
const cors = require('cors');
const mongoose = require("mongoose");
const express = require("express");
const app = express();



dotenv.config({ path: "./config.env" });
const port = process.env.PORT;

require("./connection");
const userModel = require("./model/schema");
//const defoltData=require("./jeson");
app.use(express.json());

//app.use(cors());
//we can coonect the router file ushinh this middelwear
app.use(require("./router/auth"));



app.listen(port, () => {
    console.log(`connect my backend surver at ${port} port`);
});

//defoltData();