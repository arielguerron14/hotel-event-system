module.exports = {
  validateFileUpload: (file) => {
    return file && file.originalname && file.mimetype && file.size > 0;
  }
};
