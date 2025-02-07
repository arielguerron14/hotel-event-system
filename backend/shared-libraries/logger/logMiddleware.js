const { logEvent } = require("./logService");

module.exports = (req, res, next) => {
  logEvent(`${req.method} ${req.url}`, "info");
  next();
};
