const mongoose = require('mongoose');

const calendarSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  date: { type: Date, required: true },
  location: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Calendar', calendarSchema);
