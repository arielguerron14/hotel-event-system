module.exports = {
  validateEmail: (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },
  validateNotificationPreferences: (prefs) => {
    return typeof prefs.email_notifications === "boolean" && typeof prefs.sms_notifications === "boolean";
  }
};
