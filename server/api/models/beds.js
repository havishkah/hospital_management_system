const mongoose = require('mongoose');

const bedSchema = new mongoose.Schema({
   status:{
    type:String,
    required:true
   },

   BedNo:{
      type:String,
      required:true
   },

   catagory:{
    type:String,
    required:true
   },

   description:{
      type:String,
      required:true
   },

   specialist:{
      type:String,
      required:true
   },

   ward:{
      type:String,
      required:true
   }

    
});

const Bed = new mongoose.model("bed", bedSchema);
module.exports = Bed;