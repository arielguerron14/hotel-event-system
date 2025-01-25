const Review = require('../models/reviewModel');

const createReview = async (req, res) => {
  const { userId, eventId, rating, comment } = req.body;

  if (!userId || !eventId || !rating) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const review = new Review({ userId, eventId, rating, comment });
    await review.save();
    res.status(201).json({ message: 'Review created successfully', review });
  } catch (error) {
    res.status(500).json({ message: 'Error creating review', error });
  }
};

const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching reviews', error });
  }
};

const getReviewsByEvent = async (req, res) => {
  const { eventId } = req.params;

  try {
    const reviews = await Review.find({ eventId });
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching reviews for event', error });
  }
};

module.exports = { createReview, getReviews, getReviewsByEvent };
