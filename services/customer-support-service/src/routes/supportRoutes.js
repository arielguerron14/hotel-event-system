const express = require('express');
const { createSupportTicket, getSupportTickets } = require('../controllers/supportController');

const router = express.Router();

router.post('/', createSupportTicket);
router.get('/', getSupportTickets);

module.exports = router;
