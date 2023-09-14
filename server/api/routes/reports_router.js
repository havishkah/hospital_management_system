const express = require("express");
const router = express.Router();
const Report = require('../middleware/document/reoprts_upload');

const{
  addReport,
  viewAllreports,
  viewPaitentReports,
  removeReport,
  editReports
} = require('../Controllers/report_controller')

router.post('/', Report.single("file"), addReport)
router.get('/',viewAllreports)
router.delete('/:id',removeReport)
router.get('/:patientid',viewPaitentReports)
router.put('/:id',editReports)

module.exports = router;