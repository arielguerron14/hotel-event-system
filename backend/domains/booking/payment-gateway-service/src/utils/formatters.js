module.exports = {
  formatAmount: (amount) => {
    return `$${parseFloat(amount).toFixed(2)}`;
  }
};
