const crypto = require("crypto");

module.exports = {
  generateReviewId: () => {
    return "RV-" + crypto.randomBytes(4).toString("hex").toUpperCase();
  }
};
