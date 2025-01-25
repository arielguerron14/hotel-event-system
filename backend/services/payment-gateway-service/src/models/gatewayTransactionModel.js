const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  method: { type: String, required: true },
  status: { type: String, enum: ['success', 'failed', 'pending'], default: 'pending' },
  transactionId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Transaction', transactionSchema);
