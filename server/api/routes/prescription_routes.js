const express = require("express");
const router = express.Router();

const {
    addPrescription,
    getaPrescription,
    viewPrescription,
    viewbyPatent,
    viewbyDoctor
  } = require('../Controllers/prescription_controller');

router.post('/add', addPrescription)

router.get()
  