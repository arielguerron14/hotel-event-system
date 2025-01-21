const validateBooking = (booking) => {
  const { customerName, roomId, eventDate, nights } = booking;
  return customerName && roomId && eventDate && nights > 0;
};

module.exports = { validateBooking };
