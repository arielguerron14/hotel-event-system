const isDateValid = (date) => {
  const parsedDate = new Date(date);
  return !isNaN(parsedDate);
};

module.exports = { isDateValid };
