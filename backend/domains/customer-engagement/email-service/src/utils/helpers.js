const crypto = require("crypto");

module.exports = {
  generateEmailId: () => {
    return "EMAIL-" + crypto.randomBytes(4).toString("hex").toUpperCase();
  }
};
