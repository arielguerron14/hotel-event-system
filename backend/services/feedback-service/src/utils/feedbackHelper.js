const calculateAverageRating = (feedback) => {
  const total = feedback.reduce((sum, fb) => sum + fb.rating, 0);
  return feedback.length ? (total / feedback.length).toFixed(2) : 0;
};

module.exports = { calculateAverageRating };
