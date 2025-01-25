const Queue = require('bull');
const NotificationQueue = new Queue('notifications');
const QueueModel = require('../models/queueModel');

const addNotificationToQueue = async (req, res) => {
  const { notificationData } = req.body;

  if (!notificationData) {
    return res.status(400).json({ message: 'Notification data is required' });
  }

  try {
    await NotificationQueue.add(notificationData);

    const newQueueEntry = new QueueModel({
      notificationData,
      status: 'queued',
    });

    await newQueueEntry.save();

    res.status(201).json({ message: 'Notification added to queue', queueEntry: newQueueEntry });
  } catch (err) {
    res.status(500).json({ message: 'Failed to add notification to queue', error: err });
  }
};

module.exports = { addNotificationToQueue };
