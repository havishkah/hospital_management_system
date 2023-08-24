const express = require("express");
const router = express.Router();

const {
  createPatient,
  getAllpatients,
  deletePatient,
  updatePatient,
  getPatient,
  getPatientbyNic
} = require("../Controllers/patient_controller");

router.get("/", getAllpatients);
router.get("/:id", getPatient);
router.get("/nic/:nic",getPatientbyNic)
router.post("/add", createPatient);
router.delete("/:id",deletePatient);
router.patch("/:id",updatePatient);

module.exports = router;
