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
    name:{
      type: String,
      required: true
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
