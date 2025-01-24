const validateHotel = (hotel) => {
  if (!hotel.name || !hotel.location) {
    return false;
  }
  return true;
};

module.exports = { validateHotel };


  