const Analytics = require('../models/analyticsModel');

const getEventStats = async (req, res) => {
  try {
    const stats = await Analytics.aggregate([
      {
        $group: {
          _id: '$eventId',
          totalViews: { $sum: '$views' },
          totalBookings: { $sum: '$bookings' },
        },
      },
    ]);
    res.status(200).json(stats);
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve analytics data', error: err });
  }
};

module.exports = { getEventStats };
