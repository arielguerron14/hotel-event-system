const events = [];

const createEvent = (req, res) => {
  const { name, date, location } = req.body;
  const event = { id: events.length + 1, name, date, location };
  events.push(event);
  res.status(201).json(event);
};

const getEvents = (req, res) => {
  res.json(events);
};

module.exports = { createEvent, getEvents };