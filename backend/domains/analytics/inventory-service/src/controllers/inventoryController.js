const db = require("../models/db");
const { validateInventoryData } = require("../utils/validators");
const { formatInventoryItem } = require("../utils/formatters");
const { generateInventoryId } = require("../utils/helpers");

exports.getInventory = (req, res) => {
  db.query("SELECT * FROM inventory", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.updateInventory = (req, res) => {
  const { item_name, quantity, location } = req.body;

  if (!validateInventoryData(req.body)) {
    return res.status(400).json({ error: "Invalid inventory data" });
  }

  const inventoryId = generateInventoryId();
  const formattedItem = formatInventoryItem({ item_name, quantity, location });

  db.query(
    "INSERT INTO inventory (inventory_id, item_name, quantity, location) VALUES (?, ?, ?, ?) ON DUPLICATE KEY UPDATE quantity=?, location=?",
    [
      inventoryId,
      formattedItem.item_name,
      formattedItem.quantity,
      formattedItem.location,
      formattedItem.quantity,
      formattedItem.location
    ],
    (err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json({
        message: "Inventory updated successfully",
        inventoryId,
        formattedItem
      });
    }
  );
};
