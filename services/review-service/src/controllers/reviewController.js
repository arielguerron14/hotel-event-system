const Review = require('../models/reviewModel');

const createReview = async (req, res) => {
  const { userId, eventId, rating, comment } = req.body;

  if (!userId || !eventId || !rating) {
    return res.status(400).json({ message: 'UserId, eventId, and rating are required' });
  }

  try {
    const review = new Review({ userId, eventId, rating, comment });
    await review.save();
    res.status(201).json(review);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create review', error: err });
  }
};

const getReviews = async (req, res) => {
  const { eventId } = req.params;

  try {
    const reviews = await Review.find({ eventId });
    res.status(200).json(reviews);
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve reviews', error: err });
  }
};

module.exports = { createReview, getReviews };
