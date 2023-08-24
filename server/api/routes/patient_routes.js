const express = require("express");
const router = express.Router();

const {
  createPatient,
  getAllpatients,
  deletePatient,
  updatePatient,
  getPatient,
} = require("../Controllers/patient_controller");

router.get("/", getAllpatients);
router.get("/:id", getPatient);
router.post("/add", createPatient);
router.delete("/:id",deletePatient);
router.patch("/:id",updatePatient);

module.exports = router;