const prioritizeTickets = (tickets) => {
  return tickets.sort((a, b) => {
    const priorityOrder = { high: 1, medium: 2, low: 3 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });
};

module.exports = { prioritizeTickets };
