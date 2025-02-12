module.exports = {
  formatFileName: (filename) => {
    return filename.trim().replace(/\s+/g, "_");
  }
};
