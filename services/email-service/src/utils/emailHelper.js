const validateEmailAddress = (email) => {
  const emailRegex = /^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$/;
  return emailRegex.test(email);
};

module.exports = { validateEmailAddress };
ç