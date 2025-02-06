module.exports = {
  validateReviewData: (data) => {
    return (
      typeof data.customer_id === "number" &&
      typeof data.rating === "number" &&
      data.rating >= 1 &&
      data.rating <= 5 &&
      typeof data.comments === "string"
    );
  }
};
