const connectToMySQL = require('../utils/mysqlConfig');

const getAllNotifications = async () => {
  const connection = await connectToMySQL();
  const [rows] = await connection.execute('SELECT * FROM notifications');
  return rows;
};

const createNotification = async (data) => {
  const connection = await connectToMySQL();
  await connection.execute(
    'INSERT INTO notifications (id, user_id, message, status, created_at) VALUES (?, ?, ?, ?, ?)',
    [data.id, data.user_id, data.message, data.status, new Date()]
  );
};

module.exports = { getAllNotifications, createNotification };
