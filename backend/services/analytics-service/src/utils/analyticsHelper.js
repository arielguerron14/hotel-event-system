const calculateMetrics = (data) => {
  const totalActions = data.length;
  const actionsByType = data.reduce((acc, record) => {
    acc[record.action] = (acc[record.action] || 0) + 1;
    return acc;
  }, {});

  return { totalActions, actionsByType };
};

module.exports = { calculateMetrics };
