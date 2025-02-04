const formatEventDate = (date) => {
  return new Date(date).toISOString();
};

module.exports = { formatEventDate };
