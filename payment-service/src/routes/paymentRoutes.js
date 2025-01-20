const express = require('express');
const { processPayment, getPayments } = require('../controllers/paymentController');

const router = express.Router();

router.post('/process', processPayment);
router.get('/', getPayments);

module.exports = router;