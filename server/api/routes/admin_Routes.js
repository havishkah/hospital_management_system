// server/api/routes/adminDashboardRoutes.js
const express = require('express')
const router = express.Router();

const{
  signup,
  login,
  viewUsers
} = require('../Controllers/user_controller');

router.post('/login',login);
router.post('/signup',signup);
router.get('/get',viewUsers)

module.exports = router;
