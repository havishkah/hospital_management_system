const express = require("express");
const router = express.Router();

const {
    addPrescription,
    getaPrescription,
    viewPrescription,
    viewbyPatient,
    viewbyDoctor,
    removePrescription,
    editPrescription
  } = require('../Controllers/prescription_controller');

const doctorAuth = require('../middleware/Auth/doctorAuth')

router.post('/add',doctorAuth, addPrescription)
router.get('/',viewPrescription)
router.get('/:id', getaPrescription)
router.get('/:patientid', viewbyPatient)
router.get('/:doctorid',viewbyDoctor)
router.delete('/:id',removePrescription)
router.put('/:id',editPrescription)
  
module.exports = router