const express = require('express');
const { createFeedback, getFeedback, getFeedbackByEvent } = require('../controllers/feedbackController');

const router = express.Router();

router.post('/', createFeedback);
router.get('/', getFeedback);
router.get('/event/:eventId', getFeedbackByEvent);

module.exports = router;
