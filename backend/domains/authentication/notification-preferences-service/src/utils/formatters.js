module.exports = {
  formatPreferences: (preferences) => {
    return {
      email_notifications: preferences.email_notifications ? 1 : 0,
      sms_notifications: preferences.sms_notifications ? 1 : 0,
      push_notifications: preferences.push_notifications ? 1 : 0
    };
  }
};
