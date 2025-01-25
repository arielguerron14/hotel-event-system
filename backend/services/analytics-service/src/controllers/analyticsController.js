const Analytics = require('../models/analyticsModel');
const { calculateMetrics } = require('../utils/analyticsHelper');

const createAnalyticsRecord = async (req, res) => {
  const { userId, action, timestamp } = req.body;

  if (!userId || !action || !timestamp) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const record = new Analytics({ userId, action, timestamp: new Date(timestamp) });
    await record.save();
    res.status(201).json({ message: 'Analytics record created', record });
  } catch (error) {
    res.status(500).json({ message: 'Error creating analytics record', error });
  }
};

const getAnalyticsData = async (req, res) => {
  try {
    const data = await Analytics.find();
    const metrics = calculateMetrics(data);
    res.status(200).json({ metrics, data });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching analytics data', error });
  }
};

module.exports = { createAnalyticsRecord, getAnalyticsData };
