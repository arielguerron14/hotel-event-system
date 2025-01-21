const Notification = require('../models/notificationModel');
const { sendEmail } = require('../utils/emailUtils');

const sendNotification = async (req, res) => {
  const { email, subject, message } = req.body;

  if (!email || !subject || !message) {
    return res.status(400).json({ error: 'Email, subject, and message are required' });
  }

  try {
    await sendEmail(email, subject, message);
    const notification = new Notification({ email, subject, message, status: 'sent' });
    await notification.save();
    res.status(200).json({ message: 'Notification sent successfully', notification });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send notification' });
  }
};

module.exports = { sendNotification };
