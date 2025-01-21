const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  service: { type: String, required: true },
  contactInfo: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Vendor', vendorSchema);
