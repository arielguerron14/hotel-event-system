module.exports = {
  validateInventoryData: (data) => {
    return (
      typeof data.item_name === "string" &&
      typeof data.quantity === "number" &&
      typeof data.location === "string"
    );
  }
};
