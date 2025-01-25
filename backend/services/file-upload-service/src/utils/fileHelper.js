const getFileSizeInMB = (sizeInBytes) => {
  return (sizeInBytes / (1024 * 1024)).toFixed(2);
};

module.exports = { getFileSizeInMB };
