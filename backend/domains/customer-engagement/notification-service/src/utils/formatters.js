module.exports = {
  formatEmailSubject: (subject) => {
    return subject.trim().charAt(0).toUpperCase() + subject.slice(1);
  }
};
