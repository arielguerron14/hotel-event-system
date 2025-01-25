const calculateAverageRating = (reviews) => {
  const total = reviews.reduce((sum, review) => sum + review.rating, 0);
  return reviews.length ? (total / reviews.length).toFixed(2) : 0;
};

module.exports = { calculateAverageRating };
