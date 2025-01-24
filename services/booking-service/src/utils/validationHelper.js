const isValidDate = (date) => {
  return !isNaN(Date.parse(date));
};

module.exports = { isValidDate };
