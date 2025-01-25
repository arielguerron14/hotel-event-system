const express = require('express');
const {
  addItem,
  getInventory,
  updateItemQuantity,
} = require('../controllers/inventoryController');

const router = express.Router();

router.post('/', addItem);
router.get('/', getInventory);
router.put('/:id', updateItemQuantity);

module.exports = router;
