const Payment = require('../models/paymentModel');
const { processPayment } = require('../utils/paymentProcessor');

const createPayment = async (req, res) => {
  const { userId, amount, currency, source } = req.body;

  if (!userId || !amount || !currency || !source) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const paymentResponse = await processPayment(amount, currency, source);
    const payment = new Payment({ userId, amount, currency, paymentId: paymentResponse.id });
    await payment.save();
    res.status(201).json({ message: 'Payment successful', payment });
  } catch (err) {
    res.status(500).json({ message: 'Payment failed', error: err });
  }
};

const getPayments = async (req, res) => {
  try {
    const payments = await Payment.find();
    res.status(200).json(payments);
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve payments', error: err });
  }
};

module.exports = { createPayment, getPayments };
