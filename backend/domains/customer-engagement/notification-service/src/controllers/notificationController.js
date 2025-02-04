const { getAllNotifications, createNotification } = require('../models/notificationModel');

const getNotifications = async (req, res) => {
  try {
    const notifications = await getAllNotifications();
    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching notifications', error: error.message });
  }
};

const sendNotification = async (req, res) => {
  const notificationData = req.body;

  if (!notificationData || !notificationData.id || !notificationData.user_id || !notificationData.message || !notificationData.status) {
    return res.status(400).json({ message: 'Invalid notification data' });
  }

  try {
    await createNotification(notificationData);
    res.status(201).json({ message: 'Notification sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error sending notification', error: error.message });
  }
};

module.exports = { getNotifications, sendNotification };


