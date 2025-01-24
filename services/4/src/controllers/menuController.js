const Menu = require('../models/menuModel');

const createMenuItem = async (req, res) => {
  const { name, description, price } = req.body;

  if (!name || !price) {
    return res.status(400).json({ error: 'Name and price are required' });
  }

  const menuItem = new Menu({ name, description, price });
  await menuItem.save();

  res.status(201).json({ message: 'Menu item created successfully', menuItem });
};

const getMenuItems = async (req, res) => {
  const menuItems = await Menu.find();
  res.json(menuItems);
};

const updateMenuItem = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  const updatedMenuItem = await Menu.findByIdAndUpdate(id, updates, { new: true });
  if (!updatedMenuItem) {
    return res.status(404).json({ error: 'Menu item not found' });
  }

  res.json({ message: 'Menu item updated successfully', menuItem: updatedMenuItem });
};

const deleteMenuItem = async (req, res) => {
  const { id } = req.params;

  const deletedMenuItem = await Menu.findByIdAndDelete(id);
  if (!deletedMenuItem) {
    return res.status(404).json({ error: 'Menu item not found' });
  }

  res.json({ message: 'Menu item deleted successfully' });
};

module.exports = { createMenuItem, getMenuItems, updateMenuItem, deleteMenuItem };
