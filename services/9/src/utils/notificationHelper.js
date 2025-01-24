const formatNotification = (email, message) => {
  return {
    email,
    message,
    timestamp: new Date().toISOString(),
  };
};

module.exports = { formatNotification };