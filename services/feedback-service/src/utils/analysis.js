const analyze = (feedbacks) => {
  const totalFeedback = feedbacks.length;
  const averageRating =
    feedbacks.reduce((sum, feedback) => sum + feedback.rating, 0) / totalFeedback || 0;

  const ratingsDistribution = feedbacks.reduce((distribution, feedback) => {
    distribution[feedback.rating] = (distribution[feedback.rating] || 0) + 1;
    return distribution;
  }, {});

  return { totalFeedback, averageRating, ratingsDistribution };
};

module.exports = { analyze };
