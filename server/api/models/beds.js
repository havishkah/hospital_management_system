const mongoose = require('mongoose');

const bedSchema = new mongoose.Schema({
   status:{
    type:String,
    required:true
   },

   catagory:{
    type:String,
    required:true
   }
    
});

const Bed = new mongoose.model("bed", bedSchema);
module.exports = Bed;