const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  amount: { type: Number, required: true },
  method: { type: String, required: true, enum: ['credit_card', 'paypal', 'bank_transfer'] },
  status: { type: String, required: true, enum: ['success', 'failed', 'pending'] },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Payment', paymentSchema);
