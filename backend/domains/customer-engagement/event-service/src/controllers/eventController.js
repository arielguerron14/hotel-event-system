const db = require("../models/db");
const { validateEventData } = require("../utils/validators");
const { formatEventDetails } = require("../utils/formatters");
const { generateEventId } = require("../utils/helpers");

exports.getEvents = (req, res) => {
  db.query("SELECT * FROM events", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.createEvent = (req, res) => {
  const { name, date, location, description } = req.body;

  if (!validateEventData(req.body)) {
    return res.status(400).json({ error: "Invalid event data" });
  }

  const eventId = generateEventId();
  const formattedDetails = formatEventDetails({ name, date, location, description });

  db.query(
    "INSERT INTO events (event_id, name, date, location, description) VALUES (?, ?, ?, ?, ?)",
    [eventId, formattedDetails.name, formattedDetails.date, formattedDetails.location, formattedDetails.description],
    (err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json({
        message: "Event created successfully",
        eventId,
        formattedDetails
      });
    }
  );
};
