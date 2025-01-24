const UserProfile = require('../models/userProfileModel');

const createUserProfile = async (req, res) => {
  const { userId, name, email, phone } = req.body;

  if (!userId || !name || !email) {
    return res.status(400).json({ message: 'UserId, name, and email are required' });
  }

  try {
    const profile = new UserProfile({ userId, name, email, phone });
    await profile.save();
    res.status(201).json(profile);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create user profile', error: err });
  }
};

const getUserProfile = async (req, res) => {
  const { userId } = req.params;

  try {
    const profile = await UserProfile.findOne({ userId });
    if (!profile) {
      return res.status(404).json({ message: 'User profile not found' });
    }
    res.status(200).json(profile);
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve user profile', error: err });
  }
};

module.exports = { createUserProfile, getUserProfile };
