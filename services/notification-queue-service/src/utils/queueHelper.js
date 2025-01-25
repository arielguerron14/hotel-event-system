const getQueueLength = async (queue) => {
  const count = await queue.count();
  return count;
};

module.exports = { getQueueLength };
