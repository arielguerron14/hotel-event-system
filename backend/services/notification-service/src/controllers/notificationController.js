const Notification = require('../models/notificationModel');
const { sendEmail } = require('../utils/notificationHelper');

const createNotification = async (req, res) => {
  const { email, message, type } = req.body;
  if (!email || !message || !type) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const notification = new Notification({ email, message, type });
    await notification.save();

    if (type === 'email') {
      await sendEmail(email, message);
    }

    res.status(201).json({ message: 'Notification created and sent', notification });
  } catch (error) {
    res.status(500).json({ message: 'Error creating notification', error });
  }
};

const getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find();
    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching notifications', error });
  }
};

module.exports = { createNotification, getNotifications };

