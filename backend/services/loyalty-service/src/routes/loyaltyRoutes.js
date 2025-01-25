const express = require('express');
const { addPoints, getLoyaltyInfo, redeemPoints } = require('../controllers/loyaltyController');

const router = express.Router();

router.post('/add-points', addPoints);
router.get('/:userId', getLoyaltyInfo);
router.post('/redeem-points', redeemPoints);

module.exports = router;
