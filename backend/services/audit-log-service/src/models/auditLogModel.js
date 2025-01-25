const mongoose = require('mongoose');

const auditLogSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  action: { type: String, required: true },
  details: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('AuditLog', auditLogSchema);
