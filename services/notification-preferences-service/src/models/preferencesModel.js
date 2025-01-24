const mongoose = require('mongoose');

const preferencesSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  preferences: { type: Object, required: true },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Preferences', preferencesSchema);
