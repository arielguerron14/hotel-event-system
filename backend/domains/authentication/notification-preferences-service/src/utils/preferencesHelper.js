const validatePreferences = (preferences) => {
  const validKeys = ['email', 'sms', 'push'];
  return Object.keys(preferences).every((key) => validKeys.includes(key));
};

module.exports = { validatePreferences };
