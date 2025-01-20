const notifications = [];

const sendNotification = (req, res) => {
  const { userId, message } = req.body;
  const notification = { id: notifications.length + 1, userId, message, date: new Date() };
  notifications.push(notification);
  res.status(201).json(notification);
};

const getNotifications = (req, res) => {
  res.json(notifications);
};

module.exports = { sendNotification, getNotifications };