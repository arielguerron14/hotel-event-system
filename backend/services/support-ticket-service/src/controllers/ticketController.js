const Ticket = require('../models/ticketModel');

const createTicket = async (req, res) => {
  const { userId, issue, priority } = req.body;

  if (!userId || !issue || !priority) {
    return res.status(400).json({ message: 'UserId, issue, and priority are required' });
  }

  try {
    const ticket = new Ticket({ userId, issue, priority });
    await ticket.save();
    res.status(201).json(ticket);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create support ticket', error: err });
  }
};

const getTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.status(200).json(tickets);
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve support tickets', error: err });
  }
};

module.exports = { createTicket, getTickets };
