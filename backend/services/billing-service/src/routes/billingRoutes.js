const express = require('express');
const { createInvoice, getInvoices } = require('../controllers/billingController');

const router = express.Router();

router.post('/', createInvoice);
router.get('/', getInvoices);

module.exports = router;
