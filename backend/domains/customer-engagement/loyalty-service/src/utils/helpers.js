const crypto = require("crypto");

module.exports = {
  generateLoyaltyId: () => {
    return "LOY-" + crypto.randomBytes(4).toString("hex").toUpperCase();
  }
};
