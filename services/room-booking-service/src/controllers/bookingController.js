const Booking = require('../models/bookingModel');

const createBooking = async (req, res) => {
  const { customerName, roomId, eventDate, nights } = req.body;

  if (!customerName || !roomId || !eventDate || !nights) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const newBooking = new Booking({ customerName, roomId, eventDate, nights });
  await newBooking.save();

  res.status(201).json({ message: 'Booking created successfully', booking: newBooking });
};

const getBookings = async (req, res) => {
  const bookings = await Booking.find();
  res.json(bookings);
};

const updateBooking = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  const updatedBooking = await Booking.findByIdAndUpdate(id, updates, { new: true });
  if (!updatedBooking) {
    return res.status(404).json({ error: 'Booking not found' });
  }

  res.json({ message: 'Booking updated successfully', booking: updatedBooking });
};

const deleteBooking = async (req, res) => {
  const { id } = req.params;

  const deletedBooking = await Booking.findByIdAndDelete(id);
  if (!deletedBooking) {
    return res.status(404).json({ error: 'Booking not found' });
  }

  res.json({ message: 'Booking deleted successfully' });
};

module.exports = { createBooking, getBookings, updateBooking, deleteBooking };
