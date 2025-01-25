const Invoice = require('../models/invoiceModel');
const { calculateTotal } = require('../utils/billingHelper');

const createInvoice = async (req, res) => {
  const { userId, items } = req.body;

  if (!userId || !items || !Array.isArray(items)) {
    return res.status(400).json({ message: 'Invalid input data' });
  }

  try {
    const total = calculateTotal(items);

    const invoice = new Invoice({
      userId,
      items,
      total,
      createdAt: new Date(),
    });

    await invoice.save();

    res.status(201).json({ message: 'Invoice created successfully', invoice });
  } catch (error) {
    res.status(500).json({ message: 'Error creating invoice', error });
  }
};

const getInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.find();
    res.status(200).json(invoices);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching invoices', error });
  }
};

module.exports = { createInvoice, getInvoices };
