const express = require("express");
const router = express.Router();
const requireAuth = require('../middleware/Auth/requireauth')

const {
  admitapatient,
  viewAdmits,
  getAdmitPatient,
  viewAdmitsonly,
  updateAdmit,
  removeAdmit,
  getPatientbyDoctorID
} = require("../Controllers/admit_controller");

router.use(requireAuth)

router.post("/add", admitapatient);
router.get("/", viewAdmits);
router.get("/:id", getAdmitPatient);
router.get("/:status", viewAdmitsonly);
router.get("/details/doctor/:id", getPatientbyDoctorID);
router.put("/update/:id",updateAdmit);
router.delete("/:id",removeAdmit)

module.exports = router

