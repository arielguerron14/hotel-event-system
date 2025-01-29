const express = require('express');
const { getInventory, addInventoryItem } = require('../controllers/inventoryController');

const router = express.Router();

router.get('/', getInventory); // Obtener todos los items de inventario
router.post('/', addInventoryItem); // Agregar un nuevo item al inventario

module.exports = router;

