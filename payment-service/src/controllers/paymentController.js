const payments = [];

const processPayment = (req, res) => {
  const { userId, amount, method } = req.body;
  const payment = { id: payments.length + 1, userId, amount, method, date: new Date() };
  payments.push(payment);
  res.status(201).json(payment);
};

const getPayments = (req, res) => {
  res.json(payments);
};

module.exports = { processPayment, getPayments };