const Loyalty = require('../models/loyaltyModel');
const { calculateRewards } = require('../utils/rewardsCalculator');

const addPoints = async (req, res) => {
  const { userId, points } = req.body;

  if (!userId || !points) {
    return res.status(400).json({ error: 'User ID and points are required' });
  }

  let userLoyalty = await Loyalty.findOne({ userId });
  if (!userLoyalty) {
    userLoyalty = new Loyalty({ userId, points: 0 });
  }

  userLoyalty.points += points;
  await userLoyalty.save();

  res.status(200).json({ message: 'Points added successfully', userLoyalty });
};

const getRewards = async (req, res) => {
  const { userId } = req.params;

  const userLoyalty = await Loyalty.findOne({ userId });
  if (!userLoyalty) {
    return res.status(404).json({ error: 'User not found' });
  }

  const rewards = calculateRewards(userLoyalty.points);
  res.json({ userId, points: userLoyalty.points, rewards });
};

const redeemPoints = async (req, res) => {
  const { userId, pointsToRedeem } = req.body;

  const userLoyalty = await Loyalty.findOne({ userId });
  if (!userLoyalty || userLoyalty.points < pointsToRedeem) {
    return res.status(400).json({ error: 'Not enough points to redeem' });
  }

  userLoyalty.points -= pointsToRedeem;
  await userLoyalty.save();

  res.status(200).json({ message: 'Points redeemed successfully', remainingPoints: userLoyalty.points });
};

module.exports = { addPoints, getRewards, redeemPoints };
