module.exports = {
  formatEventDetails: (event) => {
    return {
      name: event.name.trim(),
      date: new Date(event.date).toISOString(),
      location: event.location.trim(),
      description: event.description.trim()
    };
  }
};
