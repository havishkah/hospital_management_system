const express = require("express");
const router = express.Router();

const {
  admitapatient,
  viewAdmits,
  getAdmit,
} = require("../Controllers/admit_controller");

router.post("/add", admitapatient);
router.get("/", viewAdmits);
router.get("/:id", getAdmit);

module.exports = router
