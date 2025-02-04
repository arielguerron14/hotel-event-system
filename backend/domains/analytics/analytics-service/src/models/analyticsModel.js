const connectToMySQL = require('../utils/mysqlConfig');

const getAnalyticsData = async () => {
  const connection = await connectToMySQL();
  const [rows] = await connection.execute('SELECT * FROM analytics');
  return rows;
};

const saveAnalyticsData = async (data) => {
  const connection = await connectToMySQL();
  await connection.execute('INSERT INTO analytics (id, metric, value) VALUES (?, ?, ?)', [
    data.id,
    data.metric,
    data.value,
  ]);
};

module.exports = { getAnalyticsData, saveAnalyticsData };

