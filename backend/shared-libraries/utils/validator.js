module.exports = {
  validateEmail: (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
  validatePassword: (password) => password.length >= 8
};
