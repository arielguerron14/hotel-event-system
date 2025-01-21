const mongoose = require('mongoose');

const userProfileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  preferences: { type: Object, default: {} },
}, { timestamps: true });

module.exports = mongoose.model('UserProfile', userProfileSchema);
