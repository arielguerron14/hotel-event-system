const { generateReport } = require('../utils/dataProcessor');
const Analytics = require('../models/analyticsModel');

const getAnalytics = async (req, res) => {
  try {
    const data = await Analytics.find();
    const report = generateReport(data);

    res.json({ message: 'Analytics generated successfully', report });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate analytics', details: error.message });
  }
};

const addAnalyticsData = async (req, res) => {
  const { eventId, userId, action, timestamp } = req.body;

  if (!eventId || !userId || !action) {
    return res.status(400).json({ error: 'Event ID, User ID, and Action are required' });
  }

  try {
    const newData = new Analytics({ eventId, userId, action, timestamp });
    await newData.save();

    res.status(201).json({ message: 'Analytics data added successfully', data: newData });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add analytics data', details: error.message });
  }
};

module.exports = { getAnalytics, addAnalyticsData };
