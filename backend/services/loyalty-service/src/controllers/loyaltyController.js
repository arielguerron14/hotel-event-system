const Loyalty = require('../models/loyaltyModel');
const { calculatePoints } = require('../utils/loyaltyHelper');

const addPoints = async (req, res) => {
  const { userId, points } = req.body;

  if (!userId || !points) {
    return res.status(400).json({ message: 'User ID and points are required' });
  }

  try {
    const loyalty = await Loyalty.findOneAndUpdate(
      { userId },
      { $inc: { points } },
      { new: true, upsert: true }
    );

    res.status(200).json({ message: 'Points added successfully', loyalty });
  } catch (error) {
    res.status(500).json({ message: 'Error adding points', error });
  }
};

const getLoyaltyInfo = async (req, res) => {
  const { userId } = req.params;

  try {
    const loyalty = await Loyalty.findOne({ userId });
    if (!loyalty) {
      return res.status(404).json({ message: 'No loyalty data found for this user' });
    }
    res.status(200).json(loyalty);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching loyalty data', error });
  }
};

const redeemPoints = async (req, res) => {
  const { userId, points } = req.body;

  if (!userId || !points) {
    return res.status(400).json({ message: 'User ID and points are required' });
  }

  try {
    const loyalty = await Loyalty.findOne({ userId });
    if (!loyalty || loyalty.points < points) {
      return res.status(400).json({ message: 'Not enough points' });
    }

    loyalty.points -= points;
    await loyalty.save();

    res.status(200).json({ message: 'Points redeemed successfully', loyalty });
  } catch (error) {
    res.status(500).json({ message: 'Error redeeming points', error });
  }
};

module.exports = { addPoints, getLoyaltyInfo, redeemPoints };
