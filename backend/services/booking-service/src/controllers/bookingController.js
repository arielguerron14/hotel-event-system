const Booking = require('../models/bookingModel');
const { formatDate } = require('../utils/dateHelper');

const createBooking = async (req, res) => {
  const { userId, eventId, date, guests } = req.body;

  if (!userId || !eventId || !date || !guests) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const booking = new Booking({ userId, eventId, date: new Date(date), guests });
    await booking.save();
    res.status(201).json({ message: 'Booking created successfully', booking });
  } catch (error) {
    res.status(500).json({ message: 'Error creating booking', error });
  }
};

const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching bookings', error });
  }
};

const getBookingById = async (req, res) => {
  const { id } = req.params;

  try {
    const booking = await Booking.findById(id);
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching booking', error });
  }
};

module.exports = { createBooking, getBookings, getBookingById };
