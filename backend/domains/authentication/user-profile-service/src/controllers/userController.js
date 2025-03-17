const db = require("../models/db");
const validators = require("../utils/validationHelper"); // ✅ CORREGIDO

exports.getUserProfile = (req, res) => {
  const userId = req.params.id;
  db.query("SELECT * FROM users WHERE id = ?", [userId], (err, results) => {
    if (err || results.length === 0) return res.status(404).json({ error: "User not found" });
    res.json(results[0]);
  });
};

exports.updateUserProfile = (req, res) => {
  const userId = req.params.id;
  const { name, email } = req.body;

  if (!validateEmail(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }

  db.query("UPDATE users SET name = ?, email = ? WHERE id = ?", [name, email, userId], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "User profile updated successfully" });
  });
};

