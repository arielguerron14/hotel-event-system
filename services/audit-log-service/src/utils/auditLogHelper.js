const formatAuditLog = (log) => {
  return {
    userId: log.userId,
    action: log.action,
    details: log.details,
    timestamp: log.createdAt.toISOString(),
  };
};

module.exports = { formatAuditLog };