const express = require('express');
const { getEventReport, getUserReport } = require('../controllers/reportController');

const router = express.Router();

router.get('/events', getEventReport);
router.get('/users', getUserReport);

module.exports = router;
