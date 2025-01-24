const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  reportType: { type: String, required: true },
  data: { type: Object, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Report', reportSchema);
