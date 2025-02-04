const jwtHelper = require('../utils/jwtHelper');
const passwordHelper = require('../utils/passwordHelper');
const User = require('../models/userModel');

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ message: 'Missing credentials' });

  const user = await User.findOne({ email });
  if (!user || !(await passwordHelper.verifyPassword(password, user.password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwtHelper.generateToken(user._id);
  res.status(200).json({ token });
};

module.exports = { login };
