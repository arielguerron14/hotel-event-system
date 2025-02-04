const { getAllReviews, createReview } = require('../models/reviewModel');

const getReviews = async (req, res) => {
  try {
    const reviews = await getAllReviews();
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching reviews', error: error.message });
  }
};

const addReview = async (req, res) => {
  const reviewData = req.body;

  if (!reviewData || !reviewData.id || !reviewData.user_id || !reviewData.review_text || !reviewData.rating) {
    return res.status(400).json({ message: 'Invalid review data' });
  }

  try {
    await createReview(reviewData);
    res.status(201).json({ message: 'Review added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error adding review', error: error.message });
  }
};

module.exports = { getReviews, addReview };

