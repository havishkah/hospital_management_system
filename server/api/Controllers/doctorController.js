const ApiError = require("../../utilities/Errors/errors");
const mongoose = require("mongoose");
const Doctor = require("../models/doctor");

const {
  verifyInputs,
  validateInputs,
} = require("../../utilities/data_validation");

const createaDoctor = (req, res, next) => {
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
        "ward",
        "password",
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
        "ward",
        "password",
      ],

      data
    );

    if (validatedResult == false) {
      next(ApiError.badRequest("The request is missing required data."));

      return;
    }
    console.log(data);

    const doctor = new Doctor({
      firstName: data.firstName,
      lastName: data.lastName,
      initials: data.initials,
      Dob: data.Dob,
      email: data.email,
      Gender: data.Gender,
      nic: data.nic,
      contact: data.contact,
      specialist: data.specialist,
      ward: data.ward,
      password: data.password,
    });
    doctor
      .save()
      .then(() => {
        res.status(200).json({ message: "Added new doctor" });
      })
      .catch((e) => {
        console.log(e);
        next(e);
      });
  } catch (error) {
    next(error);
  }
};

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
};
