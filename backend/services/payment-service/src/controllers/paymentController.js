const Payment = require('../models/paymentModel');
const { processPayment } = require('../utils/paymentProcessor');

const createPayment = async (req, res) => {
  const { userId, amount, method } = req.body;

  if (!userId || !amount || !method) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const paymentResult = await processPayment({ userId, amount, method });

    const payment = new Payment({
      userId,
      amount,
      method,
      status: paymentResult.status,
    });

    await payment.save();

    res.status(201).json({ message: 'Payment processed successfully', payment });
  } catch (error) {
    res.status(500).json({ message: 'Error processing payment', error });
  }
};

const getPayments = async (req, res) => {
  try {
    const payments = await Payment.find();
    res.status(200).json(payments);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching payments', error });
  }
};

module.exports = { createPayment, getPayments };
