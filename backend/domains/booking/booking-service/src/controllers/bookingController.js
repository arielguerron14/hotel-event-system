const db = require("../models/db");
const { formatDate } = require("../utils/formatters");
const { validateDate, validateBookingData } = require("../utils/validators");
const { generateBookingReference } = require("../utils/helpers");

exports.getBookings = (req, res) => {
  db.query("SELECT * FROM bookings", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.createBooking = (req, res) => {
  const { user_id, room_id, check_in, check_out } = req.body;

  if (!validateBookingData(req.body) || !validateDate(check_in) || !validateDate(check_out)) {
    return res.status(400).json({ error: "Invalid booking data" });
  }

  const bookingReference = generateBookingReference();

  db.query(
    "INSERT INTO bookings (user_id, room_id, check_in, check_out, reference) VALUES (?, ?, ?, ?, ?)",
    [user_id, room_id, formatDate(check_in), formatDate(check_out), bookingReference],
    (err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: "Booking created successfully", bookingId: results.insertId, reference: bookingReference });
    }
  );
};

exports.cancelBooking = (req, res) => {
  const bookingId = req.params.id;

  db.query("DELETE FROM bookings WHERE id = ?", [bookingId], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Booking cancelled successfully" });
  });
};

