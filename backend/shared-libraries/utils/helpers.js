const crypto = require("crypto");

module.exports = {
  generateUniqueId: () => crypto.randomBytes(8).toString("hex")
};
