const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require("dotenv").config();


const app = express();

// Middleware
app.use(bodyParser.json());

const port = process.env.PORT || 5000;
const DB_URL=process.env.DB_URL;

mongoose.connect(DB_URL)
.then(()=>{
    console.log('DB connected')
})

.catch((err)=>console.log("DB connection error", err))

// Import route files
const adminDashboardRoutes = require('./api/routes/adminDashboardRoutes');

// Use main routes file
app.use('/api/adminDashboard', adminDashboardRoutes);

app.listen(port, ()=>{
    console.log('App is running on:',{port})
});


