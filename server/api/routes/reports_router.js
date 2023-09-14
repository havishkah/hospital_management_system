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

const requireAuth = require('../middleware/Auth/requireauth')

router.use(requireAuth)

router.post('/', Report.single("report"), addReport)
router.get('/',viewAllreports)
router.delete('/:id',removeReport)
router.get('/:patientid',viewPaitentReports)
router.put('/:id',editReports)

module.exports = router;