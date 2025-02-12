const crypto = require("crypto");

module.exports = {
  generateFeedbackId: () => {
    return "FB-" + crypto.randomBytes(4).toString("hex").toUpperCase();
  }
};
