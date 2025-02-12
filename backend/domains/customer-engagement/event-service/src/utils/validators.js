module.exports = {
  validateEventData: (data) => {
    return (
      typeof data.name === "string" &&
      typeof data.date === "string" &&
      typeof data.location === "string" &&
      typeof data.description === "string"
    );
  }
};
