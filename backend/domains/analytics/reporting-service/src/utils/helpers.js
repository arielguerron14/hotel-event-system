const crypto = require("crypto");

module.exports = {
  generateReportId: () => {
    return "REP-" + crypto.randomBytes(4).toString("hex").toUpperCase();
  }
};
