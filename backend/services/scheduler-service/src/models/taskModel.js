const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  name: { type: String, required: true },
  schedule: { type: String, required: true }, // Cron expression
  action: { type: String, required: true }, // Acción a realizar
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Task', taskSchema);
