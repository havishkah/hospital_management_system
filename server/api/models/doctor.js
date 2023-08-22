const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
    },
    nic:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    contact:{
        type:Number,
        required:true,
    },
    
});

const Doctor = mongoose.model("doctor", doctorSchema);

module.exports = Doctor;