const db = require("../models/db");
const { validateEmail, validateNotificationPreferences } = require("../utils/validators");

exports.getPreferences = (req, res) => {
  const userId = req.params.userId;
  db.query("SELECT * FROM notification_preferences WHERE user_id = ?", [userId], (err, results) => {
    if (err || results.length === 0) return res.status(404).json({ error: "Preferences not found" });
    res.json(results[0]);
  });
};

exports.updatePreferences = (req, res) => {
  const userId = req.params.userId;
  const { email_notifications, sms_notifications } = req.body;

  if (!validateNotificationPreferences(req.body)) {
    return res.status(400).json({ error: "Invalid preferences format" });
  }

  db.query(
    "UPDATE notification_preferences SET email_notifications = ?, sms_notifications = ? WHERE user_id = ?",
    [email_notifications, sms_notifications, userId],
    (err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: "Notification preferences updated successfully" });
    }
  );
};
