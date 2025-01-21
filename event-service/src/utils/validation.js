const validateEvent = (event) => {
    if (!event.name || !event.date || !event.location) {
      return false;
    }
    return true;
  };
  
  module.exports = { validateEvent };
  