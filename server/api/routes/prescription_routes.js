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

router.post('/add', addPrescription)
router.get('/',viewPrescription)
router.get('/:id', getaPrescription)
router.get('/p_detail/:patientid', viewbyPatient)
router.get('/d_detail/:doctorid',viewbyDoctor)
router.delete('/:id',removePrescription)
router.put('/:id',editPrescription)
  
module.exports = router