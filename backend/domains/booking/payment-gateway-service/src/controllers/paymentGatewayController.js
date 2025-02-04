const { getAllTransactions, createTransaction } = require('../models/paymentGatewayModel');

const getTransactions = async (req, res) => {
  try {
    const transactions = await getAllTransactions();
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching transactions', error: error.message });
  }
};

const processTransaction = async (req, res) => {
  const transactionData = req.body;

  if (!transactionData || !transactionData.id || !transactionData.user_id || !transactionData.amount || !transactionData.status) {
    return res.status(400).json({ message: 'Invalid transaction data' });
  }

  try {
    await createTransaction(transactionData);
    res.status(201).json({ message: 'Transaction processed successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error processing transaction', error: error.message });
  }
};

module.exports = { getTransactions, processTransaction };
