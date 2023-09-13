const express = require("express");
const router = express.Router();

const { logDoctor } = require('../Controllers/doctorController')

router.post('/doclog', logDoctor )


module.exports = router;