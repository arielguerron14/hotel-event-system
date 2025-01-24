const validateCheckIn = (checkIn) => {
  const { customerName, roomId, checkInDate, eventId } = checkIn;
  return customerName && roomId && checkInDate && eventId;
};

module.exports = { validateCheckIn };
