const mongoose = require('mongoose');

const drugsSchema = new mongoose.Schema({
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
    
});

const Drug = new mongoose.model("drugs", drugsSchema);

module.exports = Drug;