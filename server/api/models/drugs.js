const mongoose = require('mongoose');

const drugSchema = new mongoose.Schema({
    drugName:{
        type:String,
        required:true,
    },
    type:{
        type:String,
        required:true,
    },
    qty:{
        type:Number,
        required:true,
    },
    status:{
        type:String,
        required:true,
    },
    
});

const Drug = new mongoose.model("drug", drugSchema);

module.exports = Drug;