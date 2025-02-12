const crypto = require("crypto");

module.exports = {
  generateInvoiceNumber: () => {
    return "INV-" + crypto.randomBytes(4).toString("hex").toUpperCase();
  }
};
