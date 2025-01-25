const calculateStock = (items) => {
  return items.reduce((total, item) => total + item.quantity, 0);
};

module.exports = { calculateStock };
