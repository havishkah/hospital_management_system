const express = require('express');
const router = express.router();
const{
    createDoctor,
  getAlldoctors,
  deleteDoctor,
  updatedoctor
} = require("../Controllers/doctorController");

