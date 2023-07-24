const express = require('express');
const mongoose = require('mongoose');

const app = express();

const port = 8000;
const DB_URL='mongodb+srv://hospital_ectc:vYwiG1gVSE0L6OSq@hospitalsystem.ajkmceb.mongodb.net/hospitalsystem?retryWrites=true&w=majority';

mongoose.connect(DB_URL)
.then(()=>{
    console.log('DB connected')
})

.catch((err)=>console.log("DB connection error", err))

app.listen(port, ()=>{
    console.log('App is running on ',{port})
});