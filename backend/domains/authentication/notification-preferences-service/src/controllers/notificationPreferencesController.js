const db = require("../models/db");
const { validatePreferencesData } = require("../utils/validators");
const { formatPreferences } = require("../utils/formatters");
const { generatePreferenceId } = require("../utils/helpers");

exports.getPreferences = (req, res) => {
  const { userId } = req.params;

  db.query("SELECT * FROM preferences WHERE user_id = ?", [userId], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results.length > 0 ? results[0] : {});
  });
};

exports.updatePreferences = (req, res) => {
  const { userId } = req.params;
  const preferences = req.body;

  if (!validatePreferencesData(preferences)) {
    return res.status(400).json({ error: "Invalid preferences data" });
  }

  const formattedPreferences = formatPreferences(preferences);
  const preferenceId = generatePreferenceId();

  db.query(
    "INSERT INTO preferences (preference_id, user_id, email_notifications, sms_notifications, push_notifications) VALUES (?, ?, ?, ?, ?) ON DUPLICATE KEY UPDATE email_notifications=?, sms_notifications=?, push_notifications=?",
    [
      preferenceId,
      userId,
      formattedPreferences.email_notifications,
      formattedPreferences.sms_notifications,
      formattedPreferences.push_notifications,
      formattedPreferences.email_notifications,
      formattedPreferences.sms_notifications,
      formattedPreferences.push_notifications
    ],
    (err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json({
        message: "Preferences updated successfully",
        userId,
        preferenceId,
        preferences: formattedPreferences
      });
    }
  );
};

