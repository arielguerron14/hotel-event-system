const db = require("../models/db");
const { validateLoyaltyData } = require("../utils/validators");
const { formatLoyaltyPoints } = require("../utils/formatters");
const { generateLoyaltyId } = require("../utils/helpers");

exports.getLoyaltyPoints = (req, res) => {
  db.query("SELECT * FROM loyalty_points", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.addLoyaltyPoints = (req, res) => {
  const { customer_id, points } = req.body;

  if (!validateLoyaltyData(req.body)) {
    return res.status(400).json({ error: "Invalid loyalty data" });
  }

  const loyaltyId = generateLoyaltyId();
  const formattedPoints = formatLoyaltyPoints(points);

  db.query(
    "INSERT INTO loyalty_points (loyalty_id, customer_id, points) VALUES (?, ?, ?)",
    [loyaltyId, customer_id, formattedPoints],
    (err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json({
        message: "Loyalty points added successfully",
        loyaltyId,
        formattedPoints
      });
    }
  );
};
