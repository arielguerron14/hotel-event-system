const mongoose = require('mongoose');

const preferencesSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, unique: true, ref: 'User' },
  preferences: {
    email: { type: Boolean, default: true },
    sms: { type: Boolean, default: true },
    push: { type: Boolean, default: true },
  },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Preferences', preferencesSchema);
