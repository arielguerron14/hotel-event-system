const validateItem = (item) => {
  const { name, quantity } = item;
  return name && quantity > 0;
};

module.exports = { validateItem };
