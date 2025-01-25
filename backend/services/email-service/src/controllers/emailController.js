const nodemailer = require('nodemailer');
const Email = require('../models/emailModel');

const sendEmail = async (req, res) => {
  const { to, subject, message } = req.body;

  if (!to || !subject || !message) {
    return res.status(400).json({ message: 'To, subject, and message are required' });
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
    to,
    subject,
    text: message,
  };

  try {
    const emailResponse = await transporter.sendMail(mailOptions);
    const emailLog = new Email({ to, subject, message });
    await emailLog.save();

    res.status(200).json({ message: 'Email sent successfully', response: emailResponse });
  } catch (err) {
    res.status(500).json({ message: 'Failed to send email', error: err });
  }
};

module.exports = { sendEmail };
