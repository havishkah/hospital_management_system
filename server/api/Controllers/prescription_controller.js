const mongoose = require("mongoose");
const Prescription = require("../models/prescription");
const ApiError = require("../../utilities/Errors/errors");
const {
  verifyInputs,
  validateInputs,
} = require("../../utilities/data_validation");
const Admit = require("../models/admit");

const createPrescription = (req, res) => {
  try {
    data = req.body;

    const verifiedResult = verifyInputs(
      ["doctorid", "patientid","catagory", "diagnosis","drug", "frequency", "dosage", "qty"],

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
      ["doctorid", "patientid", "catagory", "diagnosis", "drug", "frequency", "dosage", "qty"],

      data
    );

    if (validatedResult == false) {
      next(ApiError.badRequest("The request is missing required data."));

      return;
    }

    const prescription = new Prescription({
      doctorid: data.doctorid,
      patientid: data.patientid,
      catagory:data.catagory,
      diagnosis: data.diagnosis,
      drug:data.drug,
      frequency: data.frequency,
      dosage: data.dosage,
      qty: data.qty,
    });
    return prescription.save().then(() => {
      res.json(200);
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

const getAllprescriptionsdetails = async (req, res) => {

  const prescription = await Prescription.find({}).sort({createdAt: -1});
  res.status(200).json(prescription);
};

const getPrescriptionbyid = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such prescription" });
  }

  const prescription = await Prescription.findById(id);

  if (!prescription) {
    return res.status(404).json({ error: "No such prescription" });
  }

  res.status(200).json(prescription);
};

const getAllprescriptionsbypatient = async (req, res) => {
  const { patientid } = req.params;

  try {
    const prescription = await Prescription.find({ patientid: patientid });

    if (!prescription) {
      return res.status(404).json({ error: "no prescriptions found" });
    }

    res.status(200).json(prescription);
  } catch (err) {
    res.status(500).json({ err: "Internal Server Error" });
  }
};

const getByDoctor = async (req, res) => {
  const { doctorid } = req.params;

  try {
    const prescription = await Prescription.find({ doctorid: doctorid });

    if (!prescription) {
      return res.status(404).json({ error: "no prescriptions found" });
    }

    res.status(200).json(prescription);
  } catch (err) {
    res.status(500).json({ err: "Internal Server Error" });
  }
};

const deletePrescription = async (req, res) => {
  const id = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Doctor details" });
  }

  const prescription = await Prescription.findByIdAndDelete({ _id: id });

  if (!prescription) {
    return res.status(404).json({ error: "No such Doctor details" });
  }

  res.status(201).json(prescription)
};

const updateprescripByID = (req, res) => {
  const id = req.params.id;

  console.log(req.params);
  const data = req.body;
  // if (!mongoose.Types.ObjectId.isValid(id)) {
  //   return res.status(404).json({ error: "No such doctor" });
  // }

  const admit = Admit.findOneAndUpdate(
    { _id: id },
    {
      diagnosis: data.diagnosis,
      frequency: data.frequency,
      dosage: data.dosage,
      qty: data.qty,
    }
  );

  admit
    .then((data) => {
      console.log(data);
      if (!data) {
        return res.status(404).json({ error: "Unable to process" });
      }

      res.status(201).json(data);
    })
    .catch((error) => {
      console.log(error.message);
    });
};


module.exports = {
  addPrescription: createPrescription,
  getaPrescription: getPrescriptionbyid,
  viewPrescription: getAllprescriptionsdetails,
  viewbyPatient: getAllprescriptionsbypatient,
  viewbyDoctor: getByDoctor,
  removePrescription: deletePrescription,
  editPrescription: updateprescripByID
};
