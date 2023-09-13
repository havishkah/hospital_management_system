const express = require("express");
const router = express.Router();

const { logDoctor } = require('../Controllers/doctorController')
const { logpatient } = require('../Controllers/patient_controller')

router.post('/doclog', logDoctor )
router.post('/patientlog', logpatient)


module.exports = router;