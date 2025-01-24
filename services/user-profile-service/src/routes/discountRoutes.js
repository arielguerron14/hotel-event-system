const express = require('express');
const { createDiscount, getDiscounts, applyDiscount } = require('../controllers/discountController');

const router = express.Router();

router.post('/', createDiscount);
router.get('/', getDiscounts);
router.post('/apply', applyDiscount);

module.exports = router;
