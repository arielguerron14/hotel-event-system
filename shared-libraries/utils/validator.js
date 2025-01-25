const validateRequestBody = (requiredFields, body) => {
    const missingFields = requiredFields.filter(field => !(field in body));
    if (missingFields.length > 0) {
      return { isValid: false, missingFields };
    }
    return { isValid: true };
  };
  
  module.exports = { validateRequestBody };
  