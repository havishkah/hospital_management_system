const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const patientSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    
  },
  initials: {
    type: String,
    
  },
  Dob: {
    type: String,
    
  },
  Nic:{
    type:String,
  },
  Gender: {
    type: String,
    
  },
  Age: {
    type: Number,
    
  },
  email:{
    type:String,
  },
 
  contact: {
    type: Number,
   
  },
  
  address: {
    type: String,
    
  },
  emergencycont: {
    type: Number,
    
  },
  AssignConsultant: {
    type: String,
    required: true,
  },
  AssignWard: {
    type: String,
    
  },
  WardBed: {
    type: String,
    
  },
  BHTNo: {
    type: String,
    required: true,
  },
  Status: {
    type: String,
    required: true,
  }
}, { timestamps: true });


const Patient = mongoose.model("patient", patientSchema);

module.exports = Patient;
