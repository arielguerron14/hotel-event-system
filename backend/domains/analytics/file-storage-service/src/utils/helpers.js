const crypto = require("crypto");

module.exports = {
  generateFileId: () => {
    return "FILE-" + crypto.randomBytes(4).toString("hex").toUpperCase();
  }
};
