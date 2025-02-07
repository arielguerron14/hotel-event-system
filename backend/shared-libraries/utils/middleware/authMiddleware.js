const { verifyToken } = require("../../config/jwt");

module.exports = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) return res.status(401).json({ error: "Unauthorized" });

  try {
    req.user = verifyToken(token);
    next();
  } catch (err) {
    return res.status(403).json({ error: "Invalid token" });
  }
};
