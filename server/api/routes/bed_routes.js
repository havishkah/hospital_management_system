const express = require("express");
const router = express.Router();

const {
    createBed
} = require('../Controllers/bed_controller');

router.post("/add",createBed);

module.exports = router;