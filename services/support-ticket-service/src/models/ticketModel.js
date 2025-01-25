const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  issue: { type: String, required: true },
  priority: { type: String, enum: ['low', 'medium', 'high'], required: true },
  status: { type: String, enum: ['open', 'in-progress', 'closed'], default: 'open' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Ticket', ticketSchema);
