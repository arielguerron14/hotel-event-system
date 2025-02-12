const db = require("../models/db");
const PDFDocument = require("pdfkit");
const { validateBillingData } = require("../utils/validators");
const { formatAmount } = require("../utils/formatters");
const { generateInvoiceNumber } = require("../utils/helpers");

exports.getInvoices = (req, res) => {
  db.query("SELECT * FROM invoices", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.generateInvoice = (req, res) => {
  const { customer_id, amount, description } = req.body;

  if (!validateBillingData(req.body)) {
    return res.status(400).json({ error: "Invalid billing data" });
  }

  const invoiceNumber = generateInvoiceNumber();

  const invoiceDoc = new PDFDocument();
  invoiceDoc.text(`Invoice Number: ${invoiceNumber}`);
  invoiceDoc.text(`Customer ID: ${customer_id}`);
  invoiceDoc.text(`Amount: ${formatAmount(amount)}`);
  invoiceDoc.text(`Description: ${description}`);

  db.query(
    "INSERT INTO invoices (invoice_number, customer_id, amount, description) VALUES (?, ?, ?, ?)",
    [invoiceNumber, customer_id, amount, description],
    (err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json({
        message: "Invoice generated successfully",
        invoiceId: results.insertId,
        invoiceNumber
      });
    }
  );
};
