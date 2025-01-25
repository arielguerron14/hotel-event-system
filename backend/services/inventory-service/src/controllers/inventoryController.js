const Inventory = require('../models/inventoryModel');

const addItem = async (req, res) => {
  const { itemName, quantity, location } = req.body;

  if (!itemName || !quantity || !location) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const item = new Inventory({ itemName, quantity, location });
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ message: 'Failed to add item', error: err });
  }
};

const getItems = async (req, res) => {
  try {
    const items = await Inventory.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve items', error: err });
  }
};

module.exports = { addItem, getItems };
