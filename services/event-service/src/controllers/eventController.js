const Event = require('../models/eventModel');

const getAllEvents = async (req, res) => {
  const events = await Event.find();
  res.status(200).json(events);
};

const createEvent = async (req, res) => {
  const { name, date, location } = req.body;
  if (!name || !date || !location) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  const newEvent = new Event({ name, date, location });
  await newEvent.save();
  res.status(201).json(newEvent);
};

module.exports = { getAllEvents, createEvent };
