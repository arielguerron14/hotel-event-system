const calculateTotalRevenue = (rooms) => {
  return rooms.reduce((total, room) => (room.availability ? total : total + room.price), 0);
};

module.exports = { calculateTotalRevenue };
