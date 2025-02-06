module.exports = {
  generateTransactionId: () => {
    return "TXN-" + Math.random().toString(36).substr(2, 10).toUpperCase();
  }
};
