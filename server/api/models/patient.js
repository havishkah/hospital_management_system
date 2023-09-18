const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const patientSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  initials: {
    type: String,
    required: true,
  },
  Dob: {
    type: String,
    required: true,
  },
  Gender: {
    type: String,
    required: true,
  },
  Age: {
    type: Number,
    required: true,
  },
  nic: {
    type: String,
    unique: true,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  emergencycont: {
    type: Number,
    required: true,
  },
});

patientSchema.statics.addPatient = async function (
  firstName,
  lastName,
  initials,
  username,
  Dob,
  Gender,
  Age,
  nic,
  contact,
  email,
  address,
  emergencycont,
) {
  const exists = await this.findOne({ nic });
    if (
      !firstName ||
      !lastName ||
      !username ||
      !Dob ||
      !initials ||
      !email ||
      !Gender ||
      !nic ||
      !contact ||
      !Age ||
      !address ||
      !emergencycont
    ) {
      throw Error("All Fields must be filled");
    }
    // if (!validator.isEmail(email)) {
    //   throw Error("Email is not valid");
    // }
    if (exists) {
      throw Error("patient is already registered");
    }
    const salt = await bcrypt.genSalt(10);
  
    const patient = await this.create({ firstName, lastName, initials,username, Dob, Gender, nic, contact, Age, address, emergencycont, email});
  
    return patient;
  };


const Patient = mongoose.model("patient", patientSchema);

module.exports = Patient;
