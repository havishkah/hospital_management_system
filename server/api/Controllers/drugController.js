const mongoose = require('mongoose')
const Doctor = require('../models/doctor');

const createaDrug = async (req, res)=>{
  const {name, type, qty} = req.body

  try {
      const drugs = await Drug.create({name, type, qty}) 
      res.status(200).json(drugs)
  } catch (err) {
      res.status(400)
  }
}


const getAlldoctordetails = async(req,res)=>{
  const drugs = await Drug.find({})
  res.status(200).json(doctor)
}


const getDoctor = async (req,res) =>{

 const { id }= req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such workout'})
    }

    const doctor = await Doctor.findById(id)

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
  createDoctor: createaDrug,
  getAlldoctors: getAlldoctordetails,
  deleteDoctor: deleteDoctorr,
  updatedoctor: updateaDoctorbyID,
  getDoctor: getDoctor
}