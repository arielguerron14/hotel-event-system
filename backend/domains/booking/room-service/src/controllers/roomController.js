const db = require("../models/db");
const { validateRoomData } = require("../utils/validators");
const { formatPrice } = require("../utils/formatters");
const { generateRoomIdentifier } = require("../utils/helpers");

exports.getRooms = (req, res) => {
  db.query("SELECT * FROM rooms", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.createRoom = (req, res) => {
  const { room_number, type, price, status } = req.body;

  if (!validateRoomData(req.body)) {
    return res.status(400).json({ error: "Invalid room data" });
  }

  const roomIdentifier = generateRoomIdentifier();

  db.query(
    "INSERT INTO rooms (room_number, type, price, status, identifier) VALUES (?, ?, ?, ?, ?)",
    [room_number, type, formatPrice(price), status, roomIdentifier],
    (err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: "Room created successfully", roomId: results.insertId, identifier: roomIdentifier });
    }
  );
};

exports.updateRoomStatus = (req, res) => {
  const roomId = req.params.id;
  const { status } = req.body;

  if (!["available", "occupied", "maintenance"].includes(status)) {
    return res.status(400).json({ error: "Invalid room status" });
  }

  db.query("UPDATE rooms SET status = ? WHERE id = ?", [status, roomId], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Room status updated successfully" });
  });
};
