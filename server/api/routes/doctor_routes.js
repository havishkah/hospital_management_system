const express = require('express');
const router = express.router();
const{
    createDoctor,
  getAlldoctors,
  deleteDoctor,
  updatedoctor
} = require("../Controllers/doctorController");
const { getDoctorByID } = require('../services/doctor_services');

router.get('/doctor', getAlldoctors)

router.get('/doctor/:id', getDoctorByID)

router.post('/doctor', createDoctor)

router.patch('/doctor/:id',updatedoctor)

router.delete('/doctor/:id',deleteDoctor)

module.exports = router