const mongoose = require('mongoose');

const checkInSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  roomId: { type: String, required: true },
  checkInDate: { type: Date, required: true },
  eventId: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('CheckIn', checkInSchema);
