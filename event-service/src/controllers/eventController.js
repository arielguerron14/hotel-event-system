const Event = require('../models/eventModel');

const createEvent = async (req, res) => {
  const { name, date, location, description } = req.body;

  if (!name || !date || !location) {
    return res.status(400).json({ error: 'Name, date, and location are required' });
  }

  const newEvent = new Event({ name, date, location, description });
  await newEvent.save();

  res.status(201).json({ message: 'Event created successfully', event: newEvent });
};

const getEvents = async (req, res) => {
  const events = await Event.find();
  res.json(events);
};

const updateEvent = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  const updatedEvent = await Event.findByIdAndUpdate(id, updatedData, { new: true });
  if (!updatedEvent) {
    return res.status(404).json({ error: 'Event not found' });
  }

  res.json({ message: 'Event updated successfully', event: updatedEvent });
};

const deleteEvent = async (req, res) => {
  const { id } = req.params;

  const deletedEvent = await Event.findByIdAndDelete(id);
  if (!deletedEvent) {
    return res.status(404).json({ error: 'Event not found' });
  }

  res.json({ message: 'Event deleted successfully' });
};

module.exports = { createEvent, getEvents, updateEvent, deleteEvent };


