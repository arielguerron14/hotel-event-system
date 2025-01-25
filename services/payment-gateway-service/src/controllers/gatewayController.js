const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Transaction = require('../models/transactionModel');

const processPayment = async (req, res) => {
  const { amount, currency, source, description } = req.body;

  if (!amount || !currency || !source || !description) {
    return res.status(400).json({ message: 'Amount, currency, source, and description are required' });
  }

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Stripe expects amount in cents
      currency,
      payment_method: source,
      confirm: true,
      description,
    });

    const transaction = new Transaction({
      paymentId: paymentIntent.id,
      amount,
      currency,
      description,
      status: 'successful',
    });

    await transaction.save();

    res.status(200).json({ message: 'Payment processed successfully', paymentIntent });
  } catch (err) {
    res.status(500).json({ message: 'Failed to process payment', error: err });
  }
};

module.exports = { processPayment };
