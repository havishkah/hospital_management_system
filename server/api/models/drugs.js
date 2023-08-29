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
<<<<<<< HEAD
    },
    status:{
        type:String,
        required:true,
    },
=======
    }
>>>>>>> 4ba0785d7a1525e62f93e2ae6a7530e0a591cfbe
    
});

const Drug = new mongoose.model("drug", drugSchema);

module.exports = Drug;