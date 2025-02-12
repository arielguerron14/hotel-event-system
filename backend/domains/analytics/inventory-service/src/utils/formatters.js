module.exports = {
  formatInventoryItem: (item) => {
    return {
      item_name: item.item_name.trim(),
      quantity: Math.max(0, item.quantity),
      location: item.location.trim()
    };
  }
};
