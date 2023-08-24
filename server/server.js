const apiErrorHandler = require("./utilities/Errors/errorHandler");
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require("cors");
require("dotenv").config();


const app = express();

app.use(cors());
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
const doctorRoutes = require('./api/routes/doctor_routes');
const drugRoutes = require('./api/routes/drug_routes');
const patientRoutes = require ('./api/routes/patient_routes');

// Use main routes file
app.use('/api/adminDashboard', adminDashboardRoutes);
app.use('/api/doctor', doctorRoutes);
app.use('/api/drugs',drugRoutes);
app.use('/api/patient',patientRoutes);

//Error handle function
app.use(apiErrorHandler);

app.listen(port, ()=>{
    console.log('App is running on:',{port})
});


