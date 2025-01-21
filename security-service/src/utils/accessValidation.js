const validateAccess = (access) => {
  const { userId, eventId, accessType } = access;
  return userId && eventId && ['entry', 'exit'].includes(accessType);
};

module.exports = { validateAccess };
