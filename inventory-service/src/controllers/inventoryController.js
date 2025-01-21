const Inventory = require('../models/inventoryModel');

const addItem = async (req, res) => {
  const { name, quantity, description } = req.body;

  if (!name || !quantity) {
    return res.status(400).json({ error: 'Name and quantity are required' });
  }

  const item = new Inventory({ name, quantity, description });
  await item.save();

  res.status(201).json({ message: 'Item added successfully', item });
};

const getItems = async (req, res) => {
  const items = await Inventory.find();
  res.json(items);
};

const updateItem = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  const updatedItem = await Inventory.findByIdAndUpdate(id, updates, { new: true });
  if (!updatedItem) {
    return res.status(404).json({ error: 'Item not found' });
  }

  res.json({ message: 'Item updated successfully', item: updatedItem });
};

const deleteItem = async (req, res) => {
  const { id } = req.params;

  const deletedItem = await Inventory.findByIdAndDelete(id);
  if (!deletedItem) {
    return res.status(404).json({ error: 'Item not found' });
  }

  res.json({ message: 'Item deleted successfully' });
};

module.exports = { addItem, getItems, updateItem, deleteItem };
