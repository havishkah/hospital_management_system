//const ApiError = require("../../utilities/Errors/errors");
const mongoose = require('mongoose')
const Doctor = require('../models/doctor');
// const { escapeLeadingUnderscores } = require('typescript');
//const {
  //  createDoctor,
  //  getAlldoctors,
  //  deleteDoctorrByID,
  //  getDoctorByID,
  //  updateDoctorbyID,
//} = require('../services/doctor_services');

const createaDoctor = (req, res,next)=>{
  try {
    const data = req.body
    console.log(data)
  
    const doctor = new Doctor({
      firstName:data.firstName,
      lastName:data.lastName,
      initials:data.initials,
      Dob:data.Dob,
      email:data.email,
      Gender:data.Gender,
      nic:data.nic,
      contact:data.contact,
      specialist:data.specialist,
      ward:data.ward
     
    });
    doctor.save().then(()=>{
      res.json(200)
    }).catch((e) => {
       console.log(e)
       next(e)
    })
  } catch (error) {
    next(error);
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