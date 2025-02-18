const db = require("../models/db");
const { formatAnalyticsData } = require("../utils/formatters");
const { generateAnalyticsId } = require("../utils/helpers");

exports.getBookingStats = (req, res) => {
  db.query(
    "SELECT COUNT(*) AS total_bookings, DATE(created_at) AS date FROM bookings GROUP BY DATE(created_at)",
    (err, results) => {
      if (err) return res.status(500).json({ error: err });

      res.json({ id: generateAnalyticsId(), stats: formatAnalyticsData(results) });
    }
  );
};

exports.getRevenueStats = (req, res) => {
  db.query(
    "SELECT SUM(amount) AS total_revenue, DATE(payment_date) AS date FROM payments GROUP BY DATE(payment_date)  ",
    (err, results) => {
      if (err) return res.status(500).json({ error: err });

      res.json({ id: generateAnalyticsId(), stats: formatAnalyticsData(results) });
    }
  );
};
