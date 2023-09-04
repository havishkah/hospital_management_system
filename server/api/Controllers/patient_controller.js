const mongoose = require("mongoose");
const Patient = require("../models/patient");
const ApiError = require("../../utilities/Errors/errors");
const {
  verifyInputs,
  validateInputs,
} = require("../../utilities/data_validation")

const createaPatient = (req, res) => {
  try {
    data = req.body;
  
      const verifiedResult = verifyInputs(
  
        [
  
          "firstName",
          "lastName",
          "initials",
          "Dob",
          "Gender",
          "Age",
          "nic",
          "contact",
          "email",
          "address",
          "emergencycont",
          "docName",
          "bht",
          "specialist",
          "ward",
          "bed",
          "diagnosis"
        ],
  
        data
  
      );
  
      if (verifiedResult == false) {
  
        next(
          ApiError.badRequest(
  
            "The request parameters are not properly formatted or are missing required fields."
  
          )
  
        );
  
        return;
  
      }
      const validatedResult = validateInputs(
  
        [
          "firstName",
          "lastName",
          "initials",
          "Dob",
          "Gender",
          "Age",
          "nic",
          "contact",
          "email",
          "address",
          "emergencycont",
          "docName",
          "bht",
          "specialist",
          "ward",
          "bed",
          "diagnosis"
        ],
  
        data
  
      );
  
      if (validatedResult == false) {
  
        next(ApiError.badRequest("The request is missing required data."));
  
        return;
  
      }

    const patient = new Patient({
      firstName: data.firstName,
      lastName: data.lastName,
      initials: data.initials,
      Dob: data.Dob,
      Gender: data.Gender,
      Age : data.Age,
      nic: data.nic,
      contact: data.contact,
      email : data.email,
      address : data.address,
      emergencycont : data.emergencycont,
      docName:data.docName,
      bht:data.bht,
      specialist:data.specialist,
      ward:data.ward,
      bed:data.bed,
      diagnosis:data.diagnosis
    });
    return patient.save().then(() => {
      res.json(200);
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

const getAllpatientsdetails = async (req, res) => {
  const patient = await Patient.find({});
  res.status(200).json(patient);
};

const getPatient = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }

  const patient = await Patient.findbyid(id);

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

  res.status(200).json(doctor);
};

const updateaPatientbyID = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Patient" });
  }

  const patient = await Patient.findByIdAndDelete(
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


module.exports = {
  createPatient: createaPatient,
  getAllpatients: getAllpatientsdetails,
  deletePatient: deletePatient,
  updatePatient: updateaPatientbyID,
  getPatientbyNic: getbyNic,
  getPatient: getPatient,
};
