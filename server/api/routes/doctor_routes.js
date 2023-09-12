const express = require("express");
const router = express.Router();

const {
  createDoctor,
  getAlldoctors,
  deleteDoctor,
  updatedoctor,
  getDoctor,
} = require("../Controllers/doctorController");

const requireAuth = require('../middleware/Auth/requireauth')

router.use(requireAuth)

router.get("/", getAlldoctors);

router.get("/:id", getDoctor);

router.post("/add", createDoctor);

router.put("/:id", updatedoctor);

router.delete("/:id", deleteDoctor);

module.exports = router;
