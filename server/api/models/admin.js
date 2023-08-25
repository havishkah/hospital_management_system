const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator')

const adminSchema = new mongoose.Schema({
   username:{
    type:String,
    required:true
   },

   email:{
    type:String,
    unique:true,
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

//static signup
adminSchema.statics.signup = async function( username,email,contact, password){
   const exists = await this.findOne({ email })

   //Validation
   if(!username ||!email || !contact || !password ){
      throw Error('All Fields must be filled')
   }
   if(!validator.isEmail(email)){
      throw Error('Email is not valid')
   }
   if(!validator.isStrongPassword(password)){
      throw Error('password is not Strong enough')
   }

   if(exists){
      throw Error('Email already in use');
   }

   const salt = await bcrypt.genSalt(10)
   const hash = await bcrypt.hash(password,salt)

   const admin = await this.create({ username,email,contact, password: hash})

   return admin;
}

const Admin = new mongoose.model("admin", adminSchema);

module.exports = Admin;