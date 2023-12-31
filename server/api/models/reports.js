const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
   

     patientid:{
      type:String,
      required:true
     },
   
   title:{
    type:String,
    required:true
   },

   type:{
    type:String,
    required:true
   },

   file:{
    type:String,
    required:true
   },

   path:{
    type:String,
    required:true
   }
   // patientid:{
   //    type:String,
   //    required:true
   // },
   // doctorid:{
   //    type:String,
   //    required:true
   // },
    
},{timestamps:true});

const Report = new mongoose.model("report", reportSchema);

module.exports = Report;