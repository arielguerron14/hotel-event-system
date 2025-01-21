const Calendar = require('../models/calendarModel');

const addEventToCalendar = async (req, res) => {
  const { title, description, date, location } = req.body;

  if (!title || !date || !location) {
    return res.status(400).json({ error: 'Title, date, and location are required' });
  }

  const calendarEvent = new Calendar({ title, description, date, location });
  await calendarEvent.save();

  res.status(201).json({ message: 'Event added to calendar successfully', calendarEvent });
};

const getCalendarEvents = async (req, res) => {
  const events = await Calendar.find();
  res.json(events);
};

const deleteCalendarEvent = async (req, res) => {
  const { id } = req.params;

  const deletedEvent = await Calendar.findByIdAndDelete(id);
  if (!deletedEvent) {
    return res.status(404).json({ error: 'Event not found in calendar' });
  }

  res.json({ message: 'Event deleted successfully' });
};

module.exports = { addEventToCalendar, getCalendarEvents, deleteCalendarEvent };
