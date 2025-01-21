const Invoice = require('../models/invoiceModel');
const { generatePDF } = require('../utils/pdfGenerator');

const createInvoice = async (req, res) => {
  const { userId, amount, details } = req.body;

  if (!userId || !amount || !details) {
    return res.status(400).json({ error: 'User ID, amount, and details are required' });
  }

  const invoice = new Invoice({ userId, amount, details });
  await invoice.save();

  const pdfBuffer = await generatePDF(invoice);
  res.setHeader('Content-Type', 'application/pdf');
  res.send(pdfBuffer);
};

const getInvoices = async (req, res) => {
  const invoices = await Invoice.find();
  res.json(invoices);
};

module.exports = { createInvoice, getInvoices };
