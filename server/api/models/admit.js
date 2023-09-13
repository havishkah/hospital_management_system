const mongoose = require("mongoose");

const admitSchema = new mongoose.Schema(
  {
    patientid: {
      type: String,
      required: true,
    },

    docName: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    nic: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    bht: {
      type: String,
      required: true,
    },
    specialist: {
      type: String,
      required: true,
    },
    ward: {
      type: String,
      required: true,
    },
    bed: {
      type: String,
      required: true,
    },
    diagnosis: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Admit = new mongoose.model("admit", admitSchema);
module.exports = Admit;
