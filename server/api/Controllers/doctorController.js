//const ApiError = require("../../utilities/Errors/errors");
const mongoose = require('mongoose')
const Doctor = require('../models/doctor');
//const {
  //  createDoctor,
  //  getAlldoctors,
  //  deleteDoctorrByID,
  //  getDoctorByID,
  //  updateDoctorbyID,
//} = require('../services/doctor_services');

const createaDoctor = (req, res)=>{
  try {
    data = req.body
  
   let fullName = data.fullName;
    let nic = data.nic;
    let email = data.email;
    let contact = data.contact;
  
    const doctor = new Doctor({
      fullName,
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