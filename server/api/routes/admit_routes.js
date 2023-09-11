const express = require("express");
const router = express.Router();

const {
  admitapatient,
  viewAdmits,
  getAdmit,
  viewAdmitsonly,
  updateAdmit,
  removeAdmit,
  getPatientbyDoctorID
} = require("../Controllers/admit_controller");

router.post("/add", admitapatient);
router.get("/", viewAdmits);
router.get("/:id", getAdmit);
router.get("/:status", viewAdmitsonly);
router.get("/details/doctor/:id", getPatientbyDoctorID);
router.put("/:id",updateAdmit);
router.delete("/:id",removeAdmit)

module.exports = router

