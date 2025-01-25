const express = require('express');
const { createReview, getReviews, getReviewsByEvent } = require('../controllers/reviewController');

const router = express.Router();

router.post('/', createReview);
router.get('/', getReviews);
router.get('/event/:eventId', getReviewsByEvent);

module.exports = router;
