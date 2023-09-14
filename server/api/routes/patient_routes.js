const express = require("express");
const router = express.Router();

const {
  createPatient,
  getAllpatients,
  deletePatient,
  updatePatient,
  getPatientByID,
  getDoctorsPaitent,
  getPatientbyNic,
  logpatient
} = require("../Controllers/patient_controller");

const requireAuth = require('../middleware/Auth/requireauth')

router.use(requireAuth)

router.get("/", getAllpatients);
router.get("/:id", getPatientByID);
router.get("/nic/:nic",getPatientbyNic)
router.get("/details/doctor/:id",getDoctorsPaitent);
router.post("/add", createPatient);
router.delete("/:id",deletePatient);
router.patch("/:id",updatePatient);
router.post('/patientlog', logpatient)

module.exports = router;
