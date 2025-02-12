module.exports = {
  validatePreferencesData: (data) => {
    return (
      typeof data.email_notifications === "boolean" &&
      typeof data.sms_notifications === "boolean" &&
      typeof data.push_notifications === "boolean"
    );
  }
};
