const calculateOpenTickets = (tickets) => {
  return tickets.filter((ticket) => ticket.status === 'open').length;
};

module.exports = { calculateOpenTickets };
