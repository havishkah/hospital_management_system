const ApiError = require("../../utilities/Errors/errors");
const mongoose = require("mongoose");
const Doctor = require("../models/doctor");
const {
    verifyInputs,
    validateInputs,
} = require("../../utilities/data_validation")

//const {
//  createDoctor,
//  getAlldoctors,
//  deleteDoctorrByID,
//  getDoctorByID,
//  updateDoctorbyID,
//} = require('../services/doctor_services');

const createaDoctor = (req, res) => {
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
        "specialist",
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
        "specialist",
      ],

      data

    );

    if (validatedResult == false) {

      next(ApiError.badRequest("The request is missing required data."));

      return;

    }

    console.log(data);
    let firstName = data.firstName;
    let lastName = data.lastName;
    let initials = data.initials;
    let Dob = data.Dob;
    let Gender = data.Gender;
    let nic = data.nic;
    let email = data.email;
    let contact = data.contact;
    let specialist = data.specialist;

    const doctor = new Doctor({
      firstName,
      lastName,
      Dob,
      initials,
      Gender,
      nic,
      email,
      contact,
      specialist,
    });
    return doctor.save().then(() => {
      res.json(200).json('Data Saved Successfully');
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

const getAlldoctordetails = async (req, res) => {
  const doctor = await Doctor.find({});
  res.status(200).json(doctor);
};

const getDoctor = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }

  const doctor = await Doctor.findbyid(id);

  if (!doctor) {
    return res.status(404).json({ error: "No such workout" });
  }

  res.status(200).json(doctor);
};

const deleteDoctorr = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Doctor details" });
  }

  const doctor = await Doctor.findByIdAndDelete({ _id: id });

  if (!doctor) {
    return res.status(404).json({ error: "No such Doctor details" });
  }

  res.status(200).json(doctor);
};

const updateaDoctorbyID = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }

  const doctor = await Doctor.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!doctor) {
    return res.status(404).json({ error: "No such workout" });
  }

  res.status(200).json(doctor);
};

module.exports = {
  createDoctor: createaDoctor,
  getAlldoctors: getAlldoctordetails,
  deleteDoctor: deleteDoctorr,
  updatedoctor: updateaDoctorbyID,
  getDoctor: getDoctor,
};
