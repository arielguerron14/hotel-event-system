const SupportTicket = require('../models/supportTicketModel');

const createTicket = async (req, res) => {
  const { userId, subject, message } = req.body;

  if (!userId || !subject || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const ticket = new SupportTicket({ userId, subject, message });
    await ticket.save();
    res.status(201).json({ message: 'Support ticket created successfully', ticket });
  } catch (error) {
    res.status(500).json({ message: 'Error creating support ticket', error });
  }
};

const getTickets = async (req, res) => {
  try {
    const tickets = await SupportTicket.find();
    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching support tickets', error });
  }
};

const updateTicketStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  if (!status) {
    return res.status(400).json({ message: 'Status is required' });
  }

  try {
    const ticket = await SupportTicket.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!ticket) {
      return res.status(404).json({ message: 'Support ticket not found' });
    }

    res.status(200).json({ message: 'Support ticket updated successfully', ticket });
  } catch (error) {
    res.status(500).json({ message: 'Error updating support ticket', error });
  }
};

module.exports = { createTicket, getTickets, updateTicketStatus };
