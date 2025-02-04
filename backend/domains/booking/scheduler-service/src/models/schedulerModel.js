const connectToMySQL = require('../utils/mysqlConfig');

const getAllSchedules = async () => {
  const connection = await connectToMySQL();
  const [rows] = await connection.execute('SELECT * FROM schedules');
  return rows;
};

const createSchedule = async (data) => {
  const connection = await connectToMySQL();
  await connection.execute(
    'INSERT INTO schedules (id, task_name, schedule_time, status, created_at) VALUES (?, ?, ?, ?, ?)',
    [data.id, data.task_name, data.schedule_time, data.status, new Date()]
  );
};

module.exports = { getAllSchedules, createSchedule };
