const express = require('express');
const router = express.router();
const{
    createDoctor,
  getAlldoctors,
  deleteDoctor,
  updatedoctor,
  getDoctor
} = require("../Controllers/doctorController");

router.get('/', getAlldoctors)

router.get('/:id', getDoctor)

router.post('/', createDoctor)

router.patch('/:id',updatedoctor)

router.delete('/:id',deleteDoctor)

module.exports = router