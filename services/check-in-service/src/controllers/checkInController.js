const CheckIn = require('../models/checkInModel');

const registerCheckIn = async (req, res) => {
  const { customerName, roomId, checkInDate, eventId } = req.body;

  if (!customerName || !roomId || !checkInDate || !eventId) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const newCheckIn = new CheckIn({ customerName, roomId, checkInDate, eventId });
  await newCheckIn.save();

  res.status(201).json({ message: 'Check-in registered successfully', checkIn: newCheckIn });
};

const getCheckIns = async (req, res) => {
  const checkIns = await CheckIn.find();
  res.json(checkIns);
};

const updateCheckIn = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  const updatedCheckIn = await CheckIn.findByIdAndUpdate(id, updates, { new: true });
  if (!updatedCheckIn) {
    return res.status(404).json({ error: 'Check-in not found' });
  }

  res.json({ message: 'Check-in updated successfully', checkIn: updatedCheckIn });
};

const deleteCheckIn = async (req, res) => {
  const { id } = req.params;

  const deletedCheckIn = await CheckIn.findByIdAndDelete(id);
  if (!deletedCheckIn) {
    return res.status(404).json({ error: 'Check-in not found' });
  }

  res.json({ message: 'Check-in deleted successfully' });
};

module.exports = { registerCheckIn, getCheckIns, updateCheckIn, deleteCheckIn };
