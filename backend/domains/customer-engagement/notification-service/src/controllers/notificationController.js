const db = require("../models/db");
const nodemailer = require("nodemailer");
const { validateNotificationData } = require("../utils/validators");
const { formatEmailSubject } = require("../utils/formatters");
const { generateNotificationId } = require("../utils/helpers");

exports.getNotifications = (req, res) => {
  db.query("SELECT * FROM notifications", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.sendNotification = (req, res) => {
  const { recipient, subject, message } = req.body;

  if (!validateNotificationData(req.body)) {
    return res.status(400).json({ error: "Invalid notification data" });
  }

  const formattedSubject = formatEmailSubject(subject);
  const notificationId = generateNotificationId();

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  let mailOptions = {
    from: process.env.EMAIL_USER,
    to: recipient,
    subject: formattedSubject,
    text: message
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    } else {
      db.query(
        "INSERT INTO notifications (notification_id, recipient, subject, message) VALUES (?, ?, ?, ?)",
        [notificationId, recipient, formattedSubject, message],
        (err, results) => {
          if (err) return res.status(500).json({ error: err });
          res.json({
            message: "Notification sent successfully",
            notificationId: results.insertId,
            generatedNotificationId: notificationId
          });
        }
      );
    }
  });
};
