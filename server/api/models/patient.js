const mongoose = require('mongoose')

const patientSchema = new mongoose.Schema({
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
    Age:{
        type:Number,
        required:true,
    },
    nic:{
        type:String,
        required:true,
    },
    contact:{
        type:Number,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    emergencycont:{
        type:Number,
        required:true,
    }
});

const Patient = mongoose.model("patient", patientSchema);

module.exports = Patient;