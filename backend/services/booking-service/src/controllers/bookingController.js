const Booking = require('../models/bookingModel');

const createBooking = async (req, res) => {
  const { userId, eventId, date } = req.body;
  if (!userId || !eventId || !date) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  try {
    const booking = new Booking({ userId, eventId, date });
    await booking.save();
    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create booking', error: err });
  }
};

const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve bookings', error: err });
  }
};

module.exports = { createBooking, getBookings };
