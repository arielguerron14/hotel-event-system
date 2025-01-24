const Hotel = require('../models/hotelModel');

const addHotel = async (req, res) => {
  const { name, location, facilities } = req.body;

  if (!name || !location) {
    return res.status(400).json({ error: 'Name and location are required' });
  }

  const hotel = new Hotel({ name, location, facilities });
  await hotel.save();

  res.status(201).json({ message: 'Hotel added successfully', hotel });
};

const getHotels = async (req, res) => {
  const hotels = await Hotel.find();
  res.json(hotels);
};

const updateHotel = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  const updatedHotel = await Hotel.findByIdAndUpdate(id, updates, { new: true });
  if (!updatedHotel) {
    return res.status(404).json({ error: 'Hotel not found' });
  }

  res.json({ message: 'Hotel updated successfully', hotel: updatedHotel });
};

const deleteHotel = async (req, res) => {
  const { id } = req.params;

  const deletedHotel = await Hotel.findByIdAndDelete(id);
  if (!deletedHotel) {
    return res.status(404).json({ error: 'Hotel not found' });
  }

  res.json({ message: 'Hotel deleted successfully' });
};

module.exports = { addHotel, getHotels, updateHotel, deleteHotel };
