const db = require("../models/db");
const { validateSupportTicket } = require("../utils/validators");
const { formatSupportMessage } = require("../utils/formatters");
const { generateSupportTicketId } = require("../utils/helpers");

exports.getSupportTickets = (req, res) => {
  db.query("SELECT * FROM support_tickets", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.createSupportTicket = (req, res) => {
  const { customer_id, subject, message } = req.body;

  if (!validateSupportTicket(req.body)) {
    return res.status(400).json({ error: "Invalid support ticket data" });
  }

  const ticketId = generateSupportTicketId();
  const formattedMessage = formatSupportMessage(message);

  db.query(
    "INSERT INTO support_tickets (ticket_id, customer_id, subject, message) VALUES (?, ?, ?, ?)",
    [ticketId, customer_id, subject, formattedMessage],
    (err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json({
        message: "Support ticket created successfully",
        ticketId,
        formattedMessage
      });
    }
  );
};
