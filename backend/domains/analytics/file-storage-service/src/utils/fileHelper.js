const path = require('path');

const isValidFileType = (fileName, allowedTypes) => {
  const ext = path.extname(fileName).toLowerCase();
  return allowedTypes.includes(ext);
};

module.exports = { isValidFileType };
