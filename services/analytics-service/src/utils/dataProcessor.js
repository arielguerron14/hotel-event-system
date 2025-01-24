const processEventData = (data) => {
  return data.map((item) => ({
    eventId: item._id,
    totalViews: item.totalViews,
    totalBookings: item.totalBookings,
  }));
};

module.exports = { processEventData };
