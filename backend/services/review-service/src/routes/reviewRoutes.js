const express = require('express');
const { createReview, getReviews } = require('../controllers/reviewController');

const router = express.Router();

router.post('/', createReview);
router.get('/:eventId', getReviews);

module.exports = router;
