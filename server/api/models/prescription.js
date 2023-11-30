const mongoose = require('mongoose');

const prescriptionSchema = new mongoose.Schema({
   
   patientid:{
      type:String,
      required:true
   },
   doctorid:{
      type:String,
      required:true
   },

   drug:{
      type:String,
      required:true
   },

   duration:{
      type:String,
      required:true
   },

   frequency:{
    type:String,
    required:true
   },

   dosage:{
    type:String,
    required:true
   },

   qty:{
    type:String,
    required:true
   },
    
},{timestamps:true});

const Prescription = new mongoose.model("Prescription", prescriptionSchema);

module.exports = Prescription;