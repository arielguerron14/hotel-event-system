const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../models/db");
const { validateEmail, validatePassword } = require("../utils/validators");

exports.register = (req, res) => {
  const { username, password, email } = req.body;

  if (!validateEmail(email) || !validatePassword(password)) {
    return res.status(400).json({ error: "Invalid email or password format" });
  }

  const hashedPassword = bcrypt.hashSync(password, 10);
  db.query("INSERT INTO users (username, email, password) VALUES (?, ?, ?)", [username, email, hashedPassword], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "User registered successfully" });
  });
};

exports.login = (req, res) => {
  const { username, password } = req.body;
  db.query("SELECT * FROM users WHERE username = ?", [username], (err, results) => {
    if (err || results.length === 0) return res.status(401).json({ error: "User not found" });
    const user = results[0];
    if (!bcrypt.compareSync(password, user.password)) return res.status(401).json({ error: "Invalid password" });
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ token });
  });
};

