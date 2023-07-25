const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();

const app = express();

const port = process.env.PORT || 8080;
const DB_URL=process.env.DB_URL;

mongoose.connect(DB_URL)
.then(()=>{
    console.log('DB connected')
})

.catch((err)=>console.log("DB connection error", err))

app.listen(port, ()=>{
    console.log('App is running on:',{port})
});