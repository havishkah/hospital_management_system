const mongoose = require('mongoose')
const Patient = require('../models/patient');

const createaDoctor = (req, res)=>{
    try {
      data = req.body
    
      let firstName = data.firstName;
      let lastName = data.lastName;
      let dob = data.Dob;
      let gender = data.Gender
      let nic = data.nic;
      let contact = data.contact;
      let specialist
    
      const paitent = new Patient({
        firstName,
        lastName,
        dob,
        gender,
        email,
        nic,
        contact
       
      });
      return doctor.save().then(()=>{
        res.json(200)
      })
    } catch (error) {
      res.status(500).json(error)
    }
  }
  
  
  const getAlldoctordetails = async(req,res)=>{
    const doctor = await Doctor.find({})
    res.status(200).json(doctor)
  }
  
  
  const getDoctor = async (req,res) =>{
  
   const { id }= req.params
      if(!mongoose.Types.ObjectId.isValid(id)){
          return res.status(404).json({error:'No such workout'})
      }
  
      const doctor = await Doctor.findbyid(id)
  
      if(!doctor){
          return res.status(404).json({error:'No such workout'})
      }
  
      res.status(200).json(doctor)    
     
    
  };
  
  
  const deleteDoctorr = async (req,res) =>{
    const { id } = req.params
  
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such Doctor details'})
    }
  
    const doctor = await Doctor.findOneAndDelete({_id:id})
  
    if(!doctor){
        return res.status(404).json({error:'No such Doctor details'})
    }
  
    res.status(200).json(doctor)  
  
  }
  
  const updateaDoctorbyID = async (req,res) =>{
    const { id } = req.params
  
      if(!mongoose.Types.ObjectId.isValid(id)){
          return res.status(404).json({error:'No such workout'})
      }
  
      const doctor = await Doctor.findOneAndUpdate({_id:id},{
          ...req.body
      })
  
      if(!doctor){
          return res.status(404).json({error:'No such workout'})
      }
  
      res.status(200).json(doctor)
  
  }
  
  module.exports ={
    createDoctor: createaDoctor,
    getAlldoctors: getAlldoctordetails,
    deleteDoctor: deleteDoctorr,
    updatedoctor: updateaDoctorbyID,
    getDoctor: getDoctor
  }

