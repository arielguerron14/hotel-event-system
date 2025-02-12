module.exports = {
  formatAnalyticsData: (data) => {
    return data.map((entry) => ({
      date: entry.date,
      value: entry.total_bookings || entry.total_revenue || 0
    }));
  }
};
