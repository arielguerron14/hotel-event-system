const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const login = async (req, res) => {
  const { username, password } = req.body;

  // Simulación de validación de usuario
  const user = User.find(u => u.username === username && u.password === password);
  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });

  res.json({ token });
};

module.exports = { login };
