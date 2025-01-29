const connectToMySQL = require('../utils/mysqlConfig');

const getAllInventory = async () => {
  const connection = await connectToMySQL();
  const [rows] = await connection.execute('SELECT * FROM inventory');
  return rows;
};

const createInventoryItem = async (data) => {
  const connection = await connectToMySQL();
  await connection.execute(
    'INSERT INTO inventory (id, name, quantity, price, created_at) VALUES (?, ?, ?, ?, ?)',
    [data.id, data.name, data.quantity, data.price, new Date()]
  );
};

module.exports = { getAllInventory, createInventoryItem };
