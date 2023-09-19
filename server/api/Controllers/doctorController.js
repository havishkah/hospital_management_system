const ApiError = require("../../utilities/Errors/errors");
const mongoose = require("mongoose");
const Doctor = require("../models/doctor");
const jwt = require('jsonwebtoken');

const createToken = (_id) =>{
  return jwt.sign({_id}, process.env.JWTSECRETE, {expiresIn: '3d'})
}

const createaDoctor = async (req, res, next) => {
  const data =req.body;

    try{
      const doctor = await Doctor.signDoctor(
        firstName = data.firstName,
        lastName = data.lastName,
        initials = data.initials,
        username= data.username,
        Gender=data.Gender,
        Dob = data.Dob,
        nic = data.nic,
        email = data.email,
        contact = data.contact,
        specialist = data.specialist,
        ward = data.ward
        );

      res.status(200).json({doctor})
    }catch(error){
      console.log(error)
      res.status(400).json({error: error.message})
    }
};

const loginDoctor = async (req, res) => {
  const {username, password} =req.body

  try {
      const doctor = await Doctor.login(username, password)

      const token = createToken(doctor._id)
      res.status(200).json({username, token})
  } catch (error) {
      res.status(400).json({error: error.message})
  }
}

const getAlldoctordetails = async (req, res) => {
  const doctor = await Doctor.find({});
  res.status(200).json(doctor);
};

const getDoctor = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Doctor" });
  }

  const doctor = await Doctor.findById(id);

  if (!doctor) {
    return res.status(404).json({ error: "No such Doctor" });
  }

  res.status(200).json(doctor);
};

const deleteDoctorr = async (req, res) => {
  const { id } = req.params;
  console.log(id);

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Doctor details" });
  }

  const doctor = await Doctor.findByIdAndDelete({ _id: id });

  if (!doctor) {
    return res.status(404).json({ error: "No such Doctor details" });
  }

  res.status(200).json(doctor);
};

const updateaDoctorbyID = (req, res) => {
  const id = req.params.id;

  console.log(req.params);
  const data = req.body;
  // if (!mongoose.Types.ObjectId.isValid(id)) {
  //   return res.status(404).json({ error: "No such doctor" });
  // }


  const doctor = Doctor.findOneAndUpdate(
    { _id: id },
    {
      
        firstName: data.firstName,
        lastName: data.lastName,
        initials: data.initials,
        Dob: data.Dob,
        Gender: data.Gender,
        contact: data.contact,
      }
   
  );

  doctor.then((data) => {
    console.log(data);
    if (!data) {
      return res.status(404).json({ error: "Unable to process" });
    }
    
    res.status(201).json(data);
  })
  .catch((error) => {
    console.log(error.message)
  })

};

module.exports = {
  createDoctor: createaDoctor,
  getAlldoctors: getAlldoctordetails,
  deleteDoctor: deleteDoctorr,
  updatedoctor: updateaDoctorbyID,
  getDoctor: getDoctor,
  logDoctor:loginDoctor
};
