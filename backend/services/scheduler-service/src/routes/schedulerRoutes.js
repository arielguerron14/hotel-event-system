const express = require('express');
const { scheduleTask } = require('../controllers/schedulerController');

const router = express.Router();

router.post('/schedule', scheduleTask);

module.exports = router;
