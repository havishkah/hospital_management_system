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

   diagnosis:{
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
    type:Number,
    required:true
   }
    
},{timestamps:true});

const Prescription = new mongoose.model("prescription", prescriptionSchema);

module.exports = Prescription;