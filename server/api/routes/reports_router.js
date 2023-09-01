const express = require("express");
const router = express.Router();
const Report = require('../middleware/document/reoprts');

const{
   reportUpload,
} = require('../Controllers/report_controller')

router.post('/report/:nic', Report.single("report"), reportUpload)

//router.get('/report/:nic')




module.exports = router;