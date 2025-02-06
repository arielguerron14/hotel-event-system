module.exports = {
  formatPrice: (price) => {
    return `$${parseFloat(price).toFixed(2)}`;
  }
};
