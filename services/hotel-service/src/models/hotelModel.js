const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  facilities: { type: [String], default: [] },
}, { timestamps: true });

module.exports = mongoose.model('Hotel', hotelSchema);
