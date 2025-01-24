const Support = require('../models/supportModel');
const { sendSupportEmail } = require('../utils/emailNotification');

const createTicket = async (req, res) => {
  const { userId, issue, priority } = req.body;

  if (!userId || !issue || !priority) {
    return res.status(400).json({ error: 'User ID, issue, and priority are required' });
  }

  const ticket = new Support({ userId, issue, priority, status: 'open' });
  await ticket.save();

  // Enviar notificación de soporte
  sendSupportEmail(ticket);

  res.status(201).json({ message: 'Support ticket created successfully', ticket });
};

const getTickets = async (req, res) => {
  const tickets = await Support.find();
  res.json(tickets);
};

const updateTicketStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  if (!status) {
    return res.status(400).json({ error: 'Status is required' });
  }

  const updatedTicket = await Support.findByIdAndUpdate(id, { status }, { new: true });
  if (!updatedTicket) {
    return res.status(404).json({ error: 'Ticket not found' });
  }

  res.json({ message: 'Ticket status updated successfully', ticket: updatedTicket });
};

module.exports = { createTicket, getTickets, updateTicketStatus };
