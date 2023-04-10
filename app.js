const dotenv = require("dotenv");
const cors = require('cors');
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const path = require("path");



dotenv.config({ path: "./config.env" });
const port = process.env.PORT || 5000;

require("./connection");
const userModel = require("./model/schema");
//const defoltData=require("./jeson");
app.use(express.json());

app.use(cors());
//we can coonect the router file ushinh this middelwear
app.use(require("./router/auth"));


//for heruku
// if(process.env.NODE_ENV == 'production'){
//     app.use(express.static("client/build"));
//     const path = require("path");
//     app.get("*", (req, res) =>{
//         res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//     })
// }

//static files
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


app.listen(port, () => {
    console.log(`connect my backend surver at ${port} port`);
});

//defoltData();