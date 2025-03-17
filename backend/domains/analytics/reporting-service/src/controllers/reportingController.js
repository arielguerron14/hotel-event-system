const db = require("../models/db");
const PDFDocument = require("pdfkit");
const fs = require("fs");
const { validateReportType } = require("../utils/validators");
const { formatReportData } = require("../utils/formatters");
const { generateReportId } = require("../utils/helpers");

exports.generateReport = (req, res) => {
  const { reportType } = req.params;

  if (!validateReportType(reportType)) {
    return res.status(400).json({ error: "Invalid report type" });
  }

  let query = "";
  if (reportType === "bookings") {
    query = "SELECT * FROM bookings";
  } else if (reportType === "revenue") {
    query = "SELECT * FROM payments";
  }

  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: err });

    const reportId = generateReportId();
    const formattedData = formatReportData(results);

    const doc = new PDFDocument();
    const filePath = `./reports/${reportId}.pdf`;

    doc.pipe(fs.createWriteStream(filePath));
    doc.text(`Report ID: ${reportId}`, { align: "center" });
    doc.text(`Report Type: ${reportType}`, { align: "center" });
    doc.moveDown();
    doc.text(formattedData);
    doc.end();

    res.json({ message: "Report generated successfully", reportId, filePath });
  });
};

// **Agregamos la función `getReports` aquí**
exports.getReports = (req, res) => {
  res.json({ message: "List of reports" });
};
