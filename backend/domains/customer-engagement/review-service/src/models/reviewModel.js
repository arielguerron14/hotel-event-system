const connectToMySQL = require('../utils/mysqlConfig');

const getAllReviews = async () => {
  const connection = await connectToMySQL();
  const [rows] = await connection.execute('SELECT * FROM reviews');
  return rows;
};

const createReview = async (data) => {
  const connection = await connectToMySQL();
  await connection.execute(
    'INSERT INTO reviews (id, user_id, review_text, rating, created_at) VALUES (?, ?, ?, ?, ?)',
    [data.id, data.user_id, data.review_text, data.rating, new Date()]
  );
};

module.exports = { getAllReviews, createReview };
