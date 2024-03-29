const mongoose = require("mongoose");
const Patient = require("../models/patient");
const ApiError = require("../../utilities/Errors/errors");

const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWTSECRETE, { expiresIn: "3d" });
};

const createaPatient = async (req, res, next) => {
  const data = req.body;

  try {
    const patient = new Patient({
      firstName :data.firstName,
      lastName :data.lastName,
      initials :data.initials,
      username :data.username,
      Dob :data.Dob,
      Nic:data.Nic,
      Gender:data.Gender,
      Age:data.Age,
      email:data.email,
      contact:data.contact,
      address:data.address,
      emergencycont:data.emergencycont,
      AssignConsultant:data.AssignConsultant,
      AssignWard:data.AssignWard,
      WardBed:data.WardBed,
      BHTNo:data.BHTNo,
      Status:data.Status
      }      
    )
    return patient .save().then(()=>{
      res.status(200).json('record added successfully');
    })

    } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

const getPatientByUN = async (req, res) => {
  const { username } = req.params;

  const patient = await Patient.findOne({ username: username });

  if (!patient) {
    return res.status(404).json({ error: "No such workout" });
  }

  res.status(200).json(patient);
};

const getAllpatientsdetails = (req, res) => {
  const patient = Patient.find();
  patient
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

const getAllpatientstatus = (req, res) => {
  const { Status } = req.params;

  const patient = Patient.find( {Status: Status});
  patient
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

const getPatient = async (req, res) => {
  const { id } = req.params;
  // if (!mongoose.Types.ObjectId.isValid(_nic)) {
  //   return res.status(404).json({ error: "No such workout12" });
  // }

  const patient = await Patient.findOne({ _id: id });

  if (!patient) {
    return res.status(404).json({ error: "No such workout" });
  }

 res.status(200).json(patient);
};

const getbyNic = async (req, res) => {
  const { nic } = req.params;

  try {
    const paitent = await Patient.find({ nic: nic });

    if (!paitent) {
      return res.status(404).json({ error: "paitent records not found" });
    }

    res.status(200).json(paitent);
  } catch (err) {
    res.status(500).json({ err: "Internal Server Error" });
  }
};

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

const update = async (req, res) => {
  const id = req.params.id;
  
  const data = req.body;
  
  const patient = Patient.findOneAndUpdate(
    { _id: id },
    {
      firstName :data.firstName,
      lastName :data.lastName,
      initials :data.initials,
      username :data.username,
      Dob :data.Dob,
      Gender:data.Gender,
      Age:data.Age,
      nic: data.nic,
      contact:data.contact,
      email: data.email,
      address:data.address,
      emergencycont:data.emergencycont,
      AssignConsultant:data.AssignConsultant,
      AssignWard:data.AssignWard,
      WardBed:data.WardBed,
      BHTNo:data.BHTNo,
      Status:data.Status
    }
  );

  patient.then((data) => {
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

const discharge = async (req, res) => {
  const id = req.params.id;
    
  const patient = Patient.findOneAndUpdate(
    { _id: id },
    {
      Status:"Discharged"
    }
  );

  patient.then((data) => {
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


const getPatientbyDoctorID = (req, res) => {
  const { id } = req.params;

  const patient = Patient.find({ docName: id });
  patient
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((e) => {
      console.log(e);
    });
};

module.exports = {
  createPatient: createaPatient,
  getAllpatients: getAllpatientsdetails,
  deletePatient: deletePatient,
  updatePatientid: update,
  getAllpatientstatus,
  dischargePatient:discharge,
  getPatientbyNic: getbyNic,
  getPatientByID: getPatient,
  getDoctorsPaitent: getPatientbyDoctorID,
  getDocpaitent: getPatientbyDoctorID,
  getPatientByUN,
};
