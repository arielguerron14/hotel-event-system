module.exports = {
  validatePaymentData: (data) => {
    return (
      typeof data.amount === "number" &&
      data.amount > 0 &&
      typeof data.currency === "string" &&
      data.payment_method &&
      typeof data.description === "string"
    );
  }
};
