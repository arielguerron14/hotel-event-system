const express = require('express');
const { createAnalyticsRecord, getAnalyticsData } = require('../controllers/analyticsController');

const router = express.Router();

router.post('/', createAnalyticsRecord);
router.get('/', getAnalyticsData);

module.exports = router;
