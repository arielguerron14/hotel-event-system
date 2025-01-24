const Report = require('../models/reportModel');
const PDFDocument = require('pdfkit');

const generateReport = async (req, res) => {
  const { reportType, data } = req.body;

  if (!reportType || !data) {
    return res.status(400).json({ message: 'Report type and data are required' });
  }

  try {
    const report = new Report({ reportType, data });
    await report.save();

    const doc = new PDFDocument();
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename=${reportType}-report.pdf`);

    doc.text(`Report Type: ${reportType}`);
    doc.text('Report Data:');
    doc.text(JSON.stringify(data, null, 2));
    doc.pipe(res);
    doc.end();
  } catch (err) {
    res.status(500).json({ message: 'Failed to generate report', error: err });
  }
};

module.exports = { generateReport };
