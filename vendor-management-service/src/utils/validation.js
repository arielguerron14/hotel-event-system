const validateVendor = (vendor) => {
  const { name, service, contactInfo } = vendor;
  return name && service && contactInfo;
};

module.exports = { validateVendor };
