const express = require('express');
const { processPayment } = require('../controllers/gatewayController');

const router = express.Router();

router.post('/process', processPayment);

module.exports = router;
