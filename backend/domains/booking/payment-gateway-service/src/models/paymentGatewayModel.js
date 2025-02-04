const connectToMySQL = require('../utils/mysqlConfig');

const getAllTransactions = async () => {
  const connection = await connectToMySQL();
  const [rows] = await connection.execute('SELECT * FROM transactions');
  return rows;
};

const createTransaction = async (data) => {
  const connection = await connectToMySQL();
  await connection.execute(
    'INSERT INTO transactions (id, user_id, amount, status, created_at) VALUES (?, ?, ?, ?, ?)',
    [data.id, data.user_id, data.amount, data.status, new Date()]
  );
};

module.exports = { getAllTransactions, createTransaction };
