const express = require("express");
const router = express.Router();

const {
    addPrescription,
    getaPrescription,
    viewPrescription,
    viewbyPatient,
    viewbyDoctor,
    removePrescription
  } = require('../Controllers/prescription_controller');

router.post('/add', addPrescription)
router.get('/',viewPrescription)
router.get('/:id', getaPrescription)
router.get('/:patientid', viewbyPatient)
router.get('/:doctorid',viewbyDoctor)
router.delete('/:id',removePrescription)
  
module.exports = router