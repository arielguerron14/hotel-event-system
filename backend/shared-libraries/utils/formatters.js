module.exports = {
    formatDate: (date) => new Date(date).toISOString(),
    formatCurrency: (amount) => `$${parseFloat(amount).toFixed(2)}`
  };
  