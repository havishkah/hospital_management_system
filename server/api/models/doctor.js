
const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required:true,
    },
    nic:{
        type: String,
        required:true,
    },
    phone:{
        type: Number,
        required:true,
    },
    email:{
        type: String,
        required:true,
    },
    registeredDate:{
        type:Date,
        default:Date.now,
    },

});

const Doctor = new mongoose.model("doctor", doctorSchema);

module.exports = Doctor;