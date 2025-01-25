const express = require('express');
const { getEventStats } = require('../controllers/analyticsController');

const router = express.Router();

router.get('/stats', getEventStats);

module.exports = router;
