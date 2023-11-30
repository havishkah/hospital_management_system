const express = require("express");
const router = express.Router();

const {
  createPatient,
  getAllpatients,
  deletePatient,
  updatePatientid,
  getPatientByID,
  getDoctorsPaitent,
  getPatientbyNic,
  getPatientByUN,
  dischargePatient,
  getAllpatientstatus
} = require("../Controllers/patient_controller");

const requireAuth = require('../middleware/Auth/requireauth')

router.use(requireAuth)

router.get("/", getAllpatients);
router.get("/:id", getPatientByID);
router.get("/nic/:nic",getPatientbyNic)
router.get("/Status/:Status",getAllpatientstatus)
router.post("/add", createPatient);
router.delete("/:id",deletePatient);
router.put("/discharge/:id", dischargePatient)
// CHange from router.patch to router.put
router.put("/patient/:id",updatePatientid);
router.get('/getby/:username',  getPatientByUN)

module.exports = router;
