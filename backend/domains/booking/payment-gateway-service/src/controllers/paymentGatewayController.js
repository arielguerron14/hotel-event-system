const axios = require("axios");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const { validatePaymentData } = require("../utils/validators");
const { formatAmount } = require("../utils/formatters");
const { generateTransactionId } = require("../utils/helpers");

exports.processStripePayment = async (req, res) => {
  const { amount, currency, payment_method, description } = req.body;

  if (!validatePaymentData(req.body)) {
    return res.status(400).json({ error: "Invalid payment data" });
  }

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Stripe usa centavos
      currency,
      payment_method,
      description,
      confirm: true
    });

    res.json({ message: "Payment processed successfully", status: paymentIntent.status });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.processPayPalPayment = async (req, res) => {
  const { amount, currency, description } = req.body;

  if (!validatePaymentData(req.body)) {
    return res.status(400).json({ error: "Invalid payment data" });
  }

  try {
    const response = await axios.post(
      `${process.env.PAYPAL_API_URL}/v2/checkout/orders`,
      {
        intent: "CAPTURE",
        purchase_units: [{ amount: { currency_code: currency, value: amount }, description }]
      },
      {
        auth: {
          username: process.env.PAYPAL_CLIENT_ID,
          password: process.env.PAYPAL_SECRET
        }
      }
    );

    res.json({ message: "PayPal payment created", orderId: response.data.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
