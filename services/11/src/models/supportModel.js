const mongoose = require('mongoose');

const supportSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  issue: { type: String, required: true },
  priority: { type: String, required: true, enum: ['low', 'medium', 'high'] },
  status: { type: String, default: 'open', enum: ['open', 'in-progress', 'closed'] },
}, { timestamps: true });

module.exports = mongoose.model('Support', supportSchema);
