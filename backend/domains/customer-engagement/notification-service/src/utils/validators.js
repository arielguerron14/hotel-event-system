module.exports = {
  validateNotificationData: (data) => {
    return (
      typeof data.recipient === "string" &&
      typeof data.subject === "string" &&
      typeof data.message === "string"
    );
  }
};
