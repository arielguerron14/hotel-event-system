const User = require('../models/userModel');
const jwt = require('../utils/jwtHelper');

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }
  const user = await User.findOne({ email });
  if (!user || !(await user.comparePassword(password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  const token = jwt.generateToken({ id: user._id });
  res.status(200).json({ token });
};

const register = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }
  const newUser = new User({ email, password });
  await newUser.save();
  res.status(201).json({ message: 'User registered successfully' });
};

module.exports = { login, register };
