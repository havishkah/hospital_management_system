const express = require("express");
const router = express.Router();

const {
  createDrug,
  getAlldrugs,
  deleteDrug,
  updatedrug,
  getDrug,
} = require("../Controllers/drugController");

const requireAuth = require('../middleware/Auth/requireauth')

router.use(requireAuth)

router.get("/", getAlldrugs);
router.get("/:id", getDrug);
router.post("/add", createDrug);
router.patch("/:id", updatedrug);
router.delete("/:id", deleteDrug);
module.exports = router;