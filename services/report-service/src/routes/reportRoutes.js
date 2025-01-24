const express = require('express');
const { generateReport } = require('../controllers/reportingController');

const router = express.Router();

router.post('/generate', generateReport);

module.exports = router;
