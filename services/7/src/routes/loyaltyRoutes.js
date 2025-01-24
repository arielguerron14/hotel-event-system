const express = require('express');
const { addPoints, getRewards, redeemPoints } = require('../controllers/loyaltyController');

const router = express.Router();

router.post('/add-points', addPoints);
router.get('/rewards/:userId', getRewards);
router.post('/redeem', redeemPoints);

module.exports = router;
