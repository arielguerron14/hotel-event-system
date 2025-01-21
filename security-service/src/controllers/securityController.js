const AccessLog = require('../models/accessLogModel');

const logAccess = async (req, res) => {
  const { userId, eventId, accessTime, accessType } = req.body;

  if (!userId || !eventId || !accessType) {
    return res.status(400).json({ error: 'User ID, Event ID, and access type are required' });
  }

  const accessLog = new AccessLog({ userId, eventId, accessTime: accessTime || new Date(), accessType });
  await accessLog.save();

  res.status(201).json({ message: 'Access logged successfully', accessLog });
};

const getAccessLogs = async (req, res) => {
  const logs = await AccessLog.find();
  res.json(logs);
};

const deleteAccessLog = async (req, res) => {
  const { id } = req.params;

  const deletedLog = await AccessLog.findByIdAndDelete(id);
  if (!deletedLog) {
    return res.status(404).json({ error: 'Access log not found' });
  }

  res.json({ message: 'Access log deleted successfully' });
};

module.exports = { logAccess, getAccessLogs, deleteAccessLog };
