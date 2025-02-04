const calculatePoints = (amountSpent) => {
  const pointsPerDollar = 10;
  return amountSpent * pointsPerDollar;
};

module.exports = { calculatePoints };
