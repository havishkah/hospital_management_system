const express = require("express");
const router = express.Router();

const { loginDoctor } = require('../Controllers/doctorController')

router.post('/doclog', loginDoctor )


module.exports = router;