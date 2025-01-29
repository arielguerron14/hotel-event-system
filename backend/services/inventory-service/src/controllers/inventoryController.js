const { getAllInventory, createInventoryItem } = require('../models/inventoryModel');

const getInventory = async (req, res) => {
  try {
    const inventory = await getAllInventory();
    res.status(200).json(inventory);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching inventory', error: error.message });
  }
};

const addInventoryItem = async (req, res) => {
  const inventoryData = req.body;

  if (!inventoryData || !inventoryData.id || !inventoryData.name || !inventoryData.quantity || !inventoryData.price) {
    return res.status(400).json({ message: 'Invalid inventory data' });
  }

  try {
    await createInventoryItem(inventoryData);
    res.status(201).json({ message: 'Inventory item added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error adding inventory item', error: error.message });
  }
};

module.exports = { getInventory, addInventoryItem };
