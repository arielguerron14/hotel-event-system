const Transaction = require('../models/gatewayTransactionModel');
const { processPayment } = require('../utils/gatewayHelper');

const handlePayment = async (req, res) => {
  const { amount, method } = req.body;

  if (!amount || !method) {
    return res.status(400).json({ message: 'Amount and method are required' });
  }

  try {
    const paymentResult = await processPayment(amount, method);

    const transaction = new Transaction({
      amount,
      method,
      status: paymentResult.success ? 'success' : 'failed',
      transactionId: paymentResult.transactionId,
    });

    await transaction.save();

    res.status(200).json({
      message: paymentResult.success ? 'Payment processed successfully' : 'Payment failed',
      transaction,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error processing payment', error });
  }
};

module.exports = { handlePayment };
