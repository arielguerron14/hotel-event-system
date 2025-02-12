module.exports = {
  validateReportType: (type) => {
    return ["bookings", "revenue"].includes(type);
  }
};
