const mongoose = require('mongoose');

const generateRevenueReport = async () => {
  // Simulación de cálculo de ingresos
  const reservations = await mongoose.connection.db.collection('bookings').find().toArray();
  const revenue = reservations.reduce((total, booking) => total + booking.price, 0);

  return {
    reportType: 'revenue',
    totalRevenue: revenue,
    totalBookings: reservations.length,
    generatedAt: new Date(),
  };
};

module.exports = { generateRevenueReport };
