const crypto = require("crypto");

module.exports = {
  generateEventId: () => {
    return "EVT-" + crypto.randomBytes(4).toString("hex").toUpperCase();
  }
};
