const mongoose = require('mongoose');

const discountSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  description: { type: String },
  discountPercentage: { type: Number, required: true },
  validUntil: { type: Date, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Discount', discountSchema);
