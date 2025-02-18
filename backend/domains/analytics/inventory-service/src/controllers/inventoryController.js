const db = require("../models/db");

exports.getInventory = (req, res) => {
  db.query("SELECT * FROM inventory", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.addItem = (req, res) => {
  const { name, quantity, price } = req.body;
  db.query(
    "INSERT INTO inventory (name, quantity, price) VALUES (?, ?, ?)",
    [name, quantity, price],
    (err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: "Item added successfully", id: results.insertId });
    }
  );
};

exports.deleteItem = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM inventory WHERE id = ?", [id], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Item deleted successfully" });
  });
};
