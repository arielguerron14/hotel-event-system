const calculateTotalItems = (inventory) => {
  return inventory.reduce((total, item) => total + item.quantity, 0);
};

module.exports = { calculateTotalItems };
