const express = require('express');
const { getTransactions, processTransaction } = require('../controllers/paymentGatewayController');

const router = express.Router();

router.get('/', getTransactions); // Obtener todas las transacciones
router.post('/', processTransaction); // Procesar una nueva transacción

module.exports = router;
