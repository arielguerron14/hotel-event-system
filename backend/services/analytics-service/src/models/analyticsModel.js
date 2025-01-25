const mongoose = require('mongoose');

const analyticsSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  action: { type: String, required: true },
  timestamp: { type: Date, required: true },
});

module.exports = mongoose.model('Analytics', analyticsSchema);
