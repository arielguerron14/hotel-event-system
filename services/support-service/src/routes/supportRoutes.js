const express = require('express');
const { createTicket, getTickets, updateTicketStatus } = require('../controllers/supportController');

const router = express.Router();

router.post('/', createTicket);
router.get('/', getTickets);
router.put('/:id/status', updateTicketStatus);

module.exports = router;
