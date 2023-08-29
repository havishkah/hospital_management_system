const express = require("express");
const router = express.Router();
const Report = require('../middleware/document/reoprts');

const{
   reportUpload,
   reportRetrive 
} = require('../Controllers/report_controller')

router.post('/report/:nic', Report.single("profile-image"), reportUpload)

router.get('/report/:nic')




module.exports = router;