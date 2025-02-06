module.exports = {
  validateBillingData: (data) => {
    return (
      typeof data.customer_id === "number" &&
      typeof data.amount === "number" &&
      data.amount > 0 &&
      typeof data.description === "string"
    );
  }
};
