const generateReport = (data) => {
  const totalActions = data.length;
  const actionsByEvent = data.reduce((acc, curr) => {
    acc[curr.eventId] = (acc[curr.eventId] || 0) + 1;
    return acc;
  }, {});

  const actionsByUser = data.reduce((acc, curr) => {
    acc[curr.userId] = (acc[curr.userId] || 0) + 1;
    return acc;
  }, {});

  return {
    totalActions,
    actionsByEvent,
    actionsByUser,
  };
};

module.exports = { generateReport };
