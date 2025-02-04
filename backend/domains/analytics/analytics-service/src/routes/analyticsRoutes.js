const express = require('express');
const { getAnalytics, saveAnalytics } = require('../controllers/analyticsController');

const router = express.Router();

router.get('/', getAnalytics);
router.post('/', saveAnalytics);

module.exports = router;
