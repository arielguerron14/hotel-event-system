module.exports = {
  validateAnalyticsData: (data) => {
    return Array.isArray(data) && data.length > 0;
  }
};
