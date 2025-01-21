const UserProfile = require('../models/userProfileModel');

const createUserProfile = async (req, res) => {
  const { name, email, preferences } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  const existingUser = await UserProfile.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ error: 'User already exists' });
  }

  const userProfile = new UserProfile({ name, email, preferences });
  await userProfile.save();
  res.status(201).json({ message: 'User profile created', userProfile });
};

const getUserProfile = async (req, res) => {
  const { email } = req.params;

  const userProfile = await UserProfile.findOne({ email });
  if (!userProfile) {
    return res.status(404).json({ error: 'User profile not found' });
  }

  res.json(userProfile);
};

const updateUserProfile = async (req, res) => {
  const { email } = req.params;
  const updates = req.body;

  const updatedProfile = await UserProfile.findOneAndUpdate({ email }, updates, { new: true });
  if (!updatedProfile) {
    return res.status(404).json({ error: 'User profile not found' });
  }

  res.json({ message: 'User profile updated', userProfile: updatedProfile });
};

module.exports = { createUserProfile, getUserProfile, updateUserProfile };
