const Feedback = require('../models/feedbackModel');

const submitFeedback = async (req, res) => {
  const { userId, eventId, rating, comment } = req.body;

  if (!userId || !eventId || !rating) {
    return res.status(400).json({ error: 'User ID, Event ID, and rating are required' });
  }

  const feedback = new Feedback({ userId, eventId, rating, comment });
  await feedback.save();

  res.status(201).json({ message: 'Feedback submitted successfully', feedback });
};

const getFeedback = async (req, res) => {
  const { eventId } = req.query;

  const feedbacks = eventId
    ? await Feedback.find({ eventId })
    : await Feedback.find();

  res.json(feedbacks);
};

const analyzeFeedback = async (req, res) => {
  const feedbacks = await Feedback.find();
  const analysis = require('../utils/analysis').analyze(feedbacks);

  res.json({ message: 'Feedback analysis complete', analysis });
};

module.exports = { submitFeedback, getFeedback, analyzeFeedback };

