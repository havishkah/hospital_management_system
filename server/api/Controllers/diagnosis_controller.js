const mongoose = require('mongoose');
const Diagnosis = require('../models/diagnosis');
const ApiError = require('../../utilities/Errors/errors');
const { verifyInputs, validateInputs } = require('../../utilities/data_validation');

const createDiagnosis = (req, res) => {
  try {
    const data = req.body;

    const requiredFields = ['patientid', 'doctorid', 'diagnosisA', 'diagnosisB', 'diagnosisC', 'diagnosisD', 'diagnosisE', 'presentingComplaint', 'hr', 'bp', 'ecg', 'troponinHb', 'troponinSerumCreatine', 'fbsWBC', 'fbsK', 'sgotPit', 'sgotNa', 'sgpt', 'management', 'dischargeMedication', 'plan'];

    const verifiedResult = verifyInputs(requiredFields, data);

    if (verifiedResult === false) {
      next(
        ApiError.badRequest(
          'The request parameters are not properly formatted or are missing required fields.'
        )
      );

      return;
    }

    const validatedResult = validateInputs(requiredFields, data);

    if (validatedResult === false) {
      next(ApiError.badRequest('The request is missing required data.'));

      return;
    }

    const diagnosis = new Diagnosis({
      patientid: data.patientid,
      doctorid: data.doctorid,
      diagnosisA: data.diagnosisA,
      diagnosisB: data.diagnosisB,
      diagnosisC: data.diagnosisC,
      diagnosisD: data.diagnosisD,
      diagnosisE: data.diagnosisE,
      presentingComplaint: data.presentingComplaint,
      hr: data.hr,
      bp: data.bp,
      ecg: data.ecg,
      troponinHb: data.troponinHb,
      troponinSerumCreatine: data.troponinSerumCreatine,
      fbsWBC: data.fbsWBC,
      fbsK: data.fbsK,
      sgotPit: data.sgotPit,
      sgotNa: data.sgotNa,
      sgpt: data.sgpt,
      management: data.management,
      dischargeMedication: data.dischargeMedication,
      plan: data.plan,
    });

    return diagnosis.save().then(() => {
      res.json(200);
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const getAllDiagnoses = async (req, res) => {
  const diagnoses = await Diagnosis.find({}).sort({ createdAt: -1 });
  res.status(200).json(diagnoses);
};

const getDiagnosisById = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such diagnosis' });
  }

  const diagnosis = await Diagnosis.findById(id);

  if (!diagnosis) {
    return res.status(404).json({ error: 'No such diagnosis' });
  }

  res.status(200).json(diagnosis);
};

const getDiagnosesByPatient = async (req, res) => {
  const { patientid } = req.params;

  try {
    const diagnoses = await Diagnosis.find({ patientid: patientid });

    if (!diagnoses) {
      return res.status(404).json({ error: 'no diagnoses found' });
    }

    res.status(200).json(diagnoses);
  } catch (err) {
    res.status(500).json({ err: 'Internal Server Error' });
  }
};

const getDiagnosesByDoctor = async (req, res) => {
  const { doctorid } = req.params;

  try {
    const diagnoses = await Diagnosis.find({ doctorid: doctorid });

    if (!diagnoses) {
      return res.status(404).json({ error: 'no diagnoses found' });
    }

    res.status(200).json(diagnoses);
  } catch (err) {
    res.status(500).json({ err: 'Internal Server Error' });
  }
};

const deleteDiagnosis = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such diagnosis' });
  }

  await Diagnosis.findByIdAndRemove(id);
  res.status(200).json({ message: 'Diagnosis deleted successfully' });
};

const updateDiagnosis = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such diagnosis' });
  }

  try {
    await Diagnosis.findByIdAndUpdate(id, req.body);
    res.status(200).json({ message: 'Diagnosis updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  addDiagnosis: createDiagnosis,
  getDiagnosis: getAllDiagnoses,
  getDiagnosisById: getDiagnosisById,
  getDiagnosisByPatient: getDiagnosesByPatient,
  getDiagnosisByDoctor: getDiagnosesByDoctor,
  deleteDiagnosis: deleteDiagnosis,
  updateDiagnosis: updateDiagnosis,
};
