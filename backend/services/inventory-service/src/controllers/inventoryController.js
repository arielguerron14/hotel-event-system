const Inventory = require('../models/inventoryModel');

const addItem = async (req, res) => {
  const { name, quantity, description } = req.body;

  if (!name || !quantity) {
    return res.status(400).json({ message: 'Name and quantity are required' });
  }

  try {
    const item = new Inventory({ name, quantity, description });
    await item.save();
    res.status(201).json({ message: 'Item added to inventory', item });
  } catch (error) {
    res.status(500).json({ message: 'Error adding item to inventory', error });
  }
};

const getInventory = async (req, res) => {
  try {
    const inventory = await Inventory.find();
    res.status(200).json(inventory);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching inventory', error });
  }
};

const updateItemQuantity = async (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body;

  if (quantity == null) {
    return res.status(400).json({ message: 'Quantity is required' });
  }

  try {
    const item = await Inventory.findByIdAndUpdate(
      id,
      { quantity },
      { new: true }
    );
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.status(200).json({ message: 'Item quantity updated', item });
  } catch (error) {
    res.status(500).json({ message: 'Error updating item quantity', error });
  }
};

module.exports = { addItem, getInventory, updateItemQuantity };
