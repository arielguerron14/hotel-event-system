const calculateTotal = (items) => {
  return items.reduce((total, item) => total + item.quantity * item.price, 0);
};

module.exports = { calculateTotal };
