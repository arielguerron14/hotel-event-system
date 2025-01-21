const validateUserProfile = (profile) => {
  if (!profile.name || !profile.email) {
    return false;
  }
  return true;
};

module.exports = { validateUserProfile };

  