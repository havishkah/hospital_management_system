const express = require("express");
const router = express.Router();

const {
  createDrug,
  getAlldrugs,
  deleteDrug,
  updatedrug,
  getDrug,
} = require("../Controllers/drugController");

router.get("/", getAlldrugs);

router.get("/:id", getDrug);

router.post("/add", createDrug);

router.patch("/:id", updatedrug);

router.delete("/:id", deleteDrug);

module.exports = router;