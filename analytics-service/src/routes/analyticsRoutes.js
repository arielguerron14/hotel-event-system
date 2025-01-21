const express = require('express');
const { getAnalytics, addAnalyticsData } = require('../controllers/analyticsController');

const router = express.Router();

router.get('/', getAnalytics);
router.post('/', addAnalyticsData);

module.exports = router;
