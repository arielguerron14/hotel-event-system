const Payment = require('../models/paymentModel');
const { processPaymentGateway } = require('../utils/paymentGateway');

const processPayment = async (req, res) => {
  const { userId, amount, method } = req.body;

  if (!userId || !amount || !method) {
    return res.status(400).json({ error: 'userId, amount, and method are required' });
  }

  try {
    const paymentResult = await processPaymentGateway({ userId, amount, method });
    const payment = new Payment({ userId, amount, method, status: paymentResult.status });
    await payment.save();

    res.status(200).json({ message: 'Payment processed successfully', payment });
  } catch (error) {
    res.status(500).json({ error: 'Payment processing failed', details: error.message });
  }
};

const getPayments = async (req, res) => {
  const payments = await Payment.find();
  res.json(payments);
};

module.exports = { processPayment, getPayments };
