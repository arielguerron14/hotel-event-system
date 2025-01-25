const express = require('express');
const { handlePayment } = require('../controllers/gatewayController');

const router = express.Router();

router.post('/process', handlePayment);

module.exports = router;
