const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const doctorSchema = new mongoose.Schema({
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
    unique: true,
    required:true
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
  nic: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
  },
  specialist: {
    type: String,
    required: true,
  },
  ward: {
    type: String,
    required: true,
  }
  
});

doctorSchema.statics.signDoctor = async function (
    firstName,
    lastName,
    initials,
    username,
    Gender,
    Dob,
    nic,
    email,
    contact,
    specialist,
    ward,
  ) {
    const exists = await this.findOne({ username });
    if (
      !firstName ||
      !lastName ||
      !Dob ||
      !username ||
      !initials ||
      !email ||
      !Gender ||
      !nic ||
      !contact ||
      !specialist ||
      !ward
    ) {
      throw Error("All Fields must be filled");
    }
    if (!validator.isEmail(email)) {
      throw Error("Email is not valid");
    }
    if (exists) {
      throw Error("username already in use");
    }
    const salt = await bcrypt.genSalt(10);
  
    const doctor = await this.create({ firstName, lastName, initials,username, Dob, Gender, nic, contact, specialist, ward, email});
  
    return doctor;
  };

const Doctor = mongoose.model("doctor", doctorSchema);



module.exports = Doctor;
