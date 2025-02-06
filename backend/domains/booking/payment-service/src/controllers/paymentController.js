const db = require("../models/db");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const { validatePaymentData } = require("../utils/validators");
const { formatAmount } = require("../utils/formatters");
const { generateTransactionId } = require("../utils/helpers");

exports.getPayments = (req, res) => {
  db.query("SELECT * FROM payments", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.processPayment = async (req, res) => {
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

    const transactionId = generateTransactionId();

    db.query(
      "INSERT INTO payments (transaction_id, amount, currency, payment_method, description, status) VALUES (?, ?, ?, ?, ?, ?)",
      [transactionId, formatAmount(amount), currency, payment_method, description, paymentIntent.status],
      (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ message: "Payment processed successfully", transactionId });
      }
    );
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
