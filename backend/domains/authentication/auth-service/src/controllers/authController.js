const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../models/db");

exports.register = (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  db.query("INSERT INTO users (username, password) VALUES (?, ?)", [username, hashedPassword], (err, results) => {
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
