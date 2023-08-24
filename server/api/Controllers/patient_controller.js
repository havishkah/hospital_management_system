const mongoose = require("mongoose");
const Patient = require("../models/patient");
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
          "nic",
          "contact",
          "email",
          "emergencycont"
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
          "nic",
          "contact",
          "email",
          "emergencycont",
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
      nic: data.nic,
      contact: data.contact,
      email : data.email,
      emergencycont : data.emergencycont
    });
    return patient.save().then(() => {
      res.json(200);
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

const getAllpatientsdetails = async (req, res) => {
  const doctor = await Doctor.find({});
  res.status(200).json(doctor);
};

const getPatient = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }

  const patient = await patient.findbyid(id);

  if (!patient) {
    return res.status(404).json({ error: "No such workout" });
  }

  res.status(200).json(patient);
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
  getPatient: getPatient,
};
