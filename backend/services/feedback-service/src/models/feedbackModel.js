const connectToMySQL = require('../utils/mysqlConfig');

const getAllFeedback = async () => {
  const connection = await connectToMySQL();
  const [rows] = await connection.execute('SELECT * FROM feedback');
  return rows;
};

const createFeedback = async (data) => {
  const connection = await connectToMySQL();
  await connection.execute(
    'INSERT INTO feedback (id, user_id, comments, rating, created_at) VALUES (?, ?, ?, ?, ?)',
    [data.id, data.user_id, data.comments, data.rating, new Date()]
  );
};

module.exports = { getAllFeedback, createFeedback };
