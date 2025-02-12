module.exports = {
  validateScheduleData: (data) => {
    return (
      typeof data.name === "string" &&
      typeof data.cron_expression === "string" &&
      typeof data.task === "string"
    );
  }
};
