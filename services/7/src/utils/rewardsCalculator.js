const calculateRewards = (points) => {
  const rewards = [];
  if (points >= 100) rewards.push('Free Coffee');
  if (points >= 500) rewards.push('Free Hotel Stay');
  if (points >= 1000) rewards.push('VIP Event Access');
  return rewards;
};

module.exports = { calculateRewards };
