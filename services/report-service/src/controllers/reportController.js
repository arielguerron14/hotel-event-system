const { generateEventReport, generateUserReport } = require('../utils/reportGenerator');

const getEventReport = async (req, res) => {
  try {
    const report = await generateEventReport();
    res.json({ message: 'Event report generated successfully', report });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate event report', details: error.message });
  }
};

const getUserReport = async (req, res) => {
  try {
    const report = await generateUserReport();
    res.json({ message: 'User report generated successfully', report });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate user report', details: error.message });
  }
};

module.exports = { getEventReport, getUserReport };
