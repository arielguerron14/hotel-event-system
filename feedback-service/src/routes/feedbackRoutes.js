const express = require('express');
const { submitFeedback, getFeedback, analyzeFeedback } = require('../controllers/feedbackController');

const router = express.Router();

router.post('/', submitFeedback);
router.get('/', getFeedback);
router.get('/analysis', analyzeFeedback);

module.exports = router;
