const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const adminSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },

    email: {
      type: String,
      unique: true,
      required: true,
    },

    accessType: {
      type: Number,
      required: true,
    },

    contact: {
      type: Number,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//static signup
adminSchema.statics.signup = async function (
  username,
  email,
  accessType,
  contact,
  password
) {
  const exists = await this.findOne({ email });
  const existsUn = await this.findOne({ username });

  //Validation
  if (!username || !email || !contact || !password || accessType) {
    throw Error("All Fields must be filled");
  }

  if (existsUn) {
    throw Error("Username already in use");
  }

  if (!validator.isEmail(email)) {
    throw Error("Email is not valid");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("password is not Strong enough");
  }

  if (exists) {
    throw Error("Email already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const admin = await this.create({ username, email,accessType, contact, password: hash });

  return admin;
};

// static login method
adminSchema.statics.login = async function (username, password) {
  if (!username || !password) {
    throw Error("All Fields must be filled");
  }

  const admin = await this.findOne({ username });

  if (!admin) {
    throw Error("Incrorrect username or password");
  }

  const match = await bcrypt.compare(password, admin.password);

  if (!match) {
    throw Error("Incorrect username or password");
  }

  return admin;
};

const Admin = new mongoose.model("admin", adminSchema);

module.exports = Admin;
