const express = require('express');
const { getBilling, createBilling } = require('../controllers/billingController');

const router = express.Router();

router.get('/', getBilling); // Obtener registros de facturación
router.post('/', createBilling); // Crear un nuevo registro de facturación

module.exports = router;
