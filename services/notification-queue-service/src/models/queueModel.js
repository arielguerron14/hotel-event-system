const mongoose = require('mongoose');

const queueSchema = new mongoose.Schema({
  notificationData: { type: Object, required: true },
  status: { type: String, enum: ['queued', 'processed', 'failed'], default: 'queued' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Queue', queueSchema);
