const Room = require('../models/roomModel');

const addRoom = async (req, res) => {
  const { name, type, price, availability } = req.body;

  if (!name || !type || !price) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const room = new Room({ name, type, price, availability });
    await room.save();
    res.status(201).json({ message: 'Room added successfully', room });
  } catch (error) {
    res.status(500).json({ message: 'Error adding room', error });
  }
};

const getRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching rooms', error });
  }
};

const updateRoomAvailability = async (req, res) => {
  const { id } = req.params;
  const { availability } = req.body;

  if (availability == null) {
    return res.status(400).json({ message: 'Availability is required' });
  }

  try {
    const room = await Room.findByIdAndUpdate(id, { availability }, { new: true });
    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }
    res.status(200).json({ message: 'Room availability updated', room });
  } catch (error) {
    res.status(500).json({ message: 'Error updating room availability', error });
  }
};

module.exports = { addRoom, getRooms, updateRoomAvailability };
