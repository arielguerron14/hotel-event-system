module.exports = {
  validateEmailData: (data) => {
    return (
      typeof data.recipient === "string" &&
      typeof data.subject === "string" &&
      typeof data.message === "string"
    );
  }
};
