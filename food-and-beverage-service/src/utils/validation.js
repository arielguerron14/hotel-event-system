const validateMenuItem = (menuItem) => {
  const { name, price } = menuItem;
  return name && price > 0;
};

module.exports = { validateMenuItem };

  