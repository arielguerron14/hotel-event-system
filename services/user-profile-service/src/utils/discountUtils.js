const isValidDiscountCode = (discount) => {
  return discount && new Date(discount.validUntil) > new Date();
};

module.exports = { isValidDiscountCode };
