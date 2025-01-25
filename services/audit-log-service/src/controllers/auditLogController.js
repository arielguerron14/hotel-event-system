const AuditLog = require('../models/auditLogModel');

const createAuditLog = async (req, res) => {
  const { userId, action, details } = req.body;

  if (!userId || !action || !details) {
    return res.status(400).json({ message: 'UserId, action, and details are required' });
  }

  try {
    const log = new AuditLog({ userId, action, details });
    await log.save();
    res.status(201).json(log);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create audit log', error: err });
  }
};

const getAuditLogs = async (req, res) => {
  try {
    const logs = await AuditLog.find();
    res.status(200).json(logs);
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve audit logs', error: err });
  }
};

module.exports = { createAuditLog, getAuditLogs };

