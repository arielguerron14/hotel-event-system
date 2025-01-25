const Notification = require('../models/notificationModel');
const nodemailer = require('nodemailer');

const sendNotification = async (req, res) => {
  const { email, message } = req.body;
  if (!email || !message) {
    return res.status(400).json({ message: 'Email and message are required' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Notification',
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Notification sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to send notification', error });
  }
};

module.exports = { sendNotification };
