const Event = require('../models/eventModel');

const createEvent = async (req, res) => {
  const { title, description, date, location } = req.body;

  if (!title || !date || !location) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const event = new Event({ title, description, date, location });
    await event.save();
    res.status(201).json({ message: 'Event created successfully', event });
  } catch (error) {
    res.status(500).json({ message: 'Error creating event', error });
  }
};

const getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching events', error });
  }
};

const updateEvent = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const event = await Event.findByIdAndUpdate(id, updates, { new: true });
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.status(200).json({ message: 'Event updated successfully', event });
  } catch (error) {
    res.status(500).json({ message: 'Error updating event', error });
  }
};

const deleteEvent = async (req, res) => {
  const { id } = req.params;

  try {
    const event = await Event.findByIdAndDelete(id);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.status(200).json({ message: 'Event deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting event', error });
  }
};

module.exports = { createEvent, getEvents, updateEvent, deleteEvent };
