const { getAllFeedback, createFeedback } = require('../models/feedbackModel');

const getFeedback = async (req, res) => {
  try {
    const feedback = await getAllFeedback();
    res.status(200).json(feedback);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching feedback', error: error.message });
  }
};

const submitFeedback = async (req, res) => {
  const feedbackData = req.body;

  if (!feedbackData || !feedbackData.id || !feedbackData.user_id || !feedbackData.comments || !feedbackData.rating) {
    return res.status(400).json({ message: 'Invalid feedback data' });
  }

  try {
    await createFeedback(feedbackData);
    res.status(201).json({ message: 'Feedback submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting feedback', error: error.message });
  }
};

module.exports = { getFeedback, submitFeedback };

