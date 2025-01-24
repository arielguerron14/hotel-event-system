const isValidRating = (rating) => {
  return rating >= 1 && rating <= 5;
};

module.exports = { isValidRating };
