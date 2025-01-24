const mongoose = require('mongoose');

const analyticsSchema = new mongoose.Schema({
  eventId: { type: String, required: true },
  views: { type: Number, default: 0 },
  bookings: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Analytics', analyticsSchema);
