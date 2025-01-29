const { getAnalyticsData, saveAnalyticsData } = require('../models/analyticsModel');

const getAnalytics = async (req, res) => {
  try {
    const data = await getAnalyticsData();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching analytics data', error: error.message });
  }
};

const saveAnalytics = async (req, res) => {
  const analyticsData = req.body;

  if (!analyticsData || !analyticsData.id || !analyticsData.metric || !analyticsData.value) {
    return res.status(400).json({ message: 'Invalid analytics data' });
  }

  try {
    await saveAnalyticsData(analyticsData);
    res.status(201).json({ message: 'Analytics data saved successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving analytics data', error: error.message });
  }
};

module.exports = { getAnalytics, saveAnalytics };
