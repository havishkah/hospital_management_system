// server/api/routes/adminDashboardRoutes.js
const express = require('express');
const router = express.Router();

const{
  signup,
  login
} = require('../Controllers/user_controller');

router.post('/login',login);
router.post('/signup',signup)

module.exports = router;
