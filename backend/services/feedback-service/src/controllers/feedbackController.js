const Feedback = require('../models/feedbackModel');

const submitFeedback = async (req, res) => {
  const { userId, content, rating } = req.body;

  if (!userId || !content || !rating) {
    return res.status(400).json({ message: 'UserId, content, and rating are required' });
  }

  try {
    const feedback = new Feedback({ userId, content, rating });
    await feedback.save();
    res.status(201).json(feedback);
  } catch (err) {
    res.status(500).json({ message: 'Failed to submit feedback', error: err });
  }
};

const getFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.find();
    res.status(200).json(feedback);
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve feedback', error: err });
  }
};

module.exports = { submitFeedback, getFeedback };
