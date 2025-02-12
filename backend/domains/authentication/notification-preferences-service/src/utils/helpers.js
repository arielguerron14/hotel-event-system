const crypto = require("crypto");

module.exports = {
  generatePreferenceId: () => {
    return "PREF-" + crypto.randomBytes(4).toString("hex").toUpperCase();
  }
};
