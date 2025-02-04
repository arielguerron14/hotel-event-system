const EmailLog = require('../models/emailLogModel');
const { sendEmail } = require('../utils/emailHelper');

const sendEmailNotification = async (req, res) => {
  const { to, subject, message } = req.body;

  if (!to || !subject || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const emailResult = await sendEmail({ to, subject, message });

    const emailLog = new EmailLog({
      to,
      subject,
      message,
      status: emailResult.success ? 'sent' : 'failed',
    });

    await emailLog.save();

    res.status(201).json({
      message: 'Email processed',
      emailLog,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error sending email', error });
  }
};

module.exports = { sendEmailNotification };
