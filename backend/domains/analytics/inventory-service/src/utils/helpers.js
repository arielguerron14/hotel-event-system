const crypto = require("crypto");

module.exports = {
  generateInventoryId: () => {
    return "INV-" + crypto.randomBytes(4).toString("hex").toUpperCase();
  }
};
