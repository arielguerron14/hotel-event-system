const crypto = require("crypto");

module.exports = {
  generateNotificationId: () => {
    return "NOTIF-" + crypto.randomBytes(4).toString("hex").toUpperCase();
  }
};
