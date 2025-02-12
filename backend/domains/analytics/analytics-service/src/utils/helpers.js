const crypto = require("crypto");

module.exports = {
  generateAnalyticsId: () => {
    return "ANL-" + crypto.randomBytes(4).toString("hex").toUpperCase();
  }
};
