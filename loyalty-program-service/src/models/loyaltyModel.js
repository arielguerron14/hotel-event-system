const mongoose = require('mongoose');

const loyaltySchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  points: { type: Number, required: true, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('Loyalty', loyaltySchema);
