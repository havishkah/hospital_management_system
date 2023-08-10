// server/api/routes/adminDashboardRoutes.js
const express = require('express');
const router = express.Router();

// Sample data for demonstration purposes
const sampleDashboardData = [
  { title: 'Report 1', value: 100 },
  { title: 'Report 2', value: 200 },
  { title: 'Report 3', value: 300 },
];

// Define the API endpoint
router.get('/data', (req, res) => {
  // Simulate a delay (for demonstration purposes)
  setTimeout(() => {
    // Send the sample data as a response
    res.status(200).json(sampleDashboardData);
  }, 1000);
});

module.exports = router;
