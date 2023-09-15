const mongoose = require("mongoose");
const Patient = require("../models/patient");
const ApiError = require("../../utilities/Errors/errors");

const jwt = require('jsonwebtoken');

const createToken = (_id) =>{
  return jwt.sign({_id}, process.env.JWTSECRETE, {expiresIn: '3d'})
} 

const createaPatient = async (req, res, next) => {
  const data = req.body;

  try {
    
    const patient = await Patient.addPatient(
      firstName= data.firstName,
      lastName= data.lastName,
      initials= data.initials,
      username= data.username,
      Dob= data.Dob,
      Gender= data.Gender,
      Age = data.Age,
      nic= data.nic,
      contact= data.contact,
      email = data.email,
      address = data.address,
      emergencycont = data.emergencycont,
      password = data.password
    );
   
    res.status(200).json({patient})
    
  } catch (error) {
    
    res.status(500).json(error);
    console.log(error)
  }
};

const loginPatient = async (req, res) => {
  const {nic, password} =req.body

  try {
      const patient = await Patient.login(nic, password)

      const token = createToken(patient._id)
      res.status(200).json({nic, token})
  } catch (error) {
      res.status(400).json({error: error.message})
  }
}

const getAllpatientsdetails = async (req, res) => {
  const patient = await Patient.find({});
  res.status(200).json(patient);
};

const getPatient = async (req, res) => {
  const { id} = req.params;
  // if (!mongoose.Types.ObjectId.isValid(_nic)) {
  //   return res.status(404).json({ error: "No such workout12" });
  // }

  const patient = await Patient.find({_id: id});

  if (!patient) {
    return res.status(404).json({ error: "No such workout" });
  }

  res.status(200).json(patient);
};

const getbyNic = async (req,res) => {
  const { nic } = req.params;

  try{
    const paitent = await Patient.find({ nic: nic});

    if(!paitent){
      return res.status(404).json({error : "paitent records not found"});
    }

    res.status(200).json(paitent);
  }catch(err){
    res.status(500).json({err: "Internal Server Error"})
  }
}

const deletePatient = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Patient details" });
  }

  const patient = await Patient.findByIdAndDelete({ _id: id });

  if (!patient) {
    return res.status(404).json({ error: "No such Patient details" });
  }

  res.status(200).json(patient);
};

const updateaPatientbyID = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Patient" });
  }

  const patient = await Patient.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!patient) {
    return res.status(404).json({ error: "No such workout" });
  }

  res.status(200).json(patient);
};

 const getPatientbyDoctorID =  (req, res) => {
   const { id } = req.params;


  const patient =  Patient.find(
    { docName: id },
  
  );
  patient.then((data) => {

     console.log(data);
     res.status(200).json(data);

  }).catch((e)=>{
     console.log(e);
  })

};

module.exports = {
  createPatient: createaPatient,
  getAllpatients: getAllpatientsdetails,
  deletePatient: deletePatient,
  updatePatient: updateaPatientbyID,
  getPatientbyNic: getbyNic,
  getPatientByID: getPatient,
  getDoctorsPaitent:getPatientbyDoctorID,
  getDocpaitent: getPatientbyDoctorID,
  logpatient: loginPatient
};