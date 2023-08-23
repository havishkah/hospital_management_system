const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    initials:{
        type:String,
        required:true,
    },
    Dob:{
        type:String,
        required:true,
    },
    Gender:{
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
    specialist:{
        type:String,
        required:true,
    }
    
});

const Doctor = mongoose.model("doctor", doctorSchema);

module.exports = Doctor;