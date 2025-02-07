module.exports = {
  validateLoyaltyData: (data) => {
    return (
      typeof data.customer_id === "number" &&
      typeof data.points === "number" &&
      data.points > 0
    );
  }
};
