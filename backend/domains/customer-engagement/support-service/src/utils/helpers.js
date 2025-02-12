const crypto = require("crypto");

module.exports = {
  generateSupportTicketId: () => {
    return "SUP-" + crypto.randomBytes(4).toString("hex").toUpperCase();
  }
};
