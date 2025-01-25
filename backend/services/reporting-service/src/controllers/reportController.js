const { generateRevenueReport } = require('../utils/reportHelper');

const generateReport = async (req, res) => {
  const { reportType } = req.body;

  if (!reportType) {
    return res.status(400).json({ message: 'Report type is required' });
  }

  try {
    let report;

    if (reportType === 'revenue') {
      report = await generateRevenueReport();
    } else {
      return res.status(400).json({ message: 'Invalid report type' });
    }

    res.status(200).json({ message: 'Report generated successfully', report });
  } catch (error) {
    res.status(500).json({ message: 'Error generating report', error });
  }
};

module.exports = { generateReport };
