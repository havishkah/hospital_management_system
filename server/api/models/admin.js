const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
   username:{
    type:String,
    required:true
   },

   email:{
    type:String,
    required:true
   },

   contact:{
    type:Number,
    required:true
   },

   password:{
    type:String,
    required:true
   }
    
},{timestamps:true});

const Admin = new mongoose.model("admin", adminSchema);

module.exports = Admin;