module.exports = {
    formatLog: (message, type) => {
      return `[${new Date().toISOString()}] ${type.toUpperCase()}: ${message}`;
    }
  };
  