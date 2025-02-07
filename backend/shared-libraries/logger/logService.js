const logger = require("../config/logger");

const logEvent = (message, level = "info") => {
  logger.log({ level, message });
};

module.exports = { logEvent };
