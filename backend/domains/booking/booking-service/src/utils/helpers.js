module.exports = {
    generateBookingReference: () => {
      return "BOOK-" + Math.random().toString(36).substr(2, 9).toUpperCase();
    }
  };
  