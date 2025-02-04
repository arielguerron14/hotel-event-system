const connectToMySQL = require('../utils/mysqlConfig');

const getBillingRecords = async () => {
  const connection = await connectToMySQL();
  const [rows] = await connection.execute('SELECT * FROM billing');
  return rows;
};

const createBillingRecord = async (data) => {
  const connection = await connectToMySQL();
  await connection.execute(
    'INSERT INTO billing (id, user_id, amount, status, created_at) VALUES (?, ?, ?, ?, ?)',
    [data.id, data.user_id, data.amount, data.status, new Date()]
  );
};

module.exports = { getBillingRecords, createBillingRecord };
