const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  reportType: { type: String, required: true },
  generatedAt: { type: Date, default: Date.now },
  data: { type: Object, required: true },
});

module.exports = mongoose.model('Report', reportSchema);
