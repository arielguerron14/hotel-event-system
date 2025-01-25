const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const processPayment = async (amount, currency, source) => {
  try {
    const payment = await stripe.charges.create({
      amount: amount * 100, // Stripe expects the amount in cents
      currency,
      source,
      description: 'Payment for hotel event booking',
    });
    return payment;
  } catch (err) {
    throw new Error(`Payment processing failed: ${err.message}`);
  }
};

module.exports = { processPayment };
