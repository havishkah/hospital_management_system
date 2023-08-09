const mongoose = require('mongoose');

const drugsSchema = new mongoose.Schema({
    DrugName:{
        type:String,
        required:true,
    },
    Type:{
        type:String,
        required:true,
    },
    Qty:{
        type:Number,
        required:true,
    },
    
});

const Drug = new mongoose.model("drugs", drugsSchema);

module.exports = Drug;