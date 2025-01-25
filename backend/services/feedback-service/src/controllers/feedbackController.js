const Feedback = require('../models/feedbackModel');

const createFeedback = async (req, res) => {
  const { userId, eventId, comment, rating } = req.body;

  if (!userId || !eventId || !comment) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const feedback = new Feedback({ userId, eventId, comment, rating });
    await feedback.save();
    res.status(201).json({ message: 'Feedback created successfully', feedback });
  } catch (error) {
    res.status(500).json({ message: 'Error creating feedback', error });
  }
};

const getFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.find();
    res.status(200).json(feedback);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching feedback', error });
  }
};

const getFeedbackByEvent = async (req, res) => {
  const { eventId } = req.params;

  try {
    const feedback = await Feedback.find({ eventId });
    res.status(200).json(feedback);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching feedback for event', error });
  }
};

module.exports = { createFeedback, getFeedback, getFeedbackByEvent };
