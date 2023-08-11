const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
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
   }
    
},{timestamps:true});

const Report = new mongoose.model("report", reportSchema);

module.exports = Report;