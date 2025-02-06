const crypto = require("crypto");

module.exports = {
  generateTaskId: () => {
    return "TASK-" + crypto.randomBytes(4).toString("hex").toUpperCase();
  }
};
