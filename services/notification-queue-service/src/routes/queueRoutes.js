const express = require('express');
const { addNotificationToQueue } = require('../controllers/queueController');

const router = express.Router();

router.post('/add', addNotificationToQueue);

module.exports = router;
