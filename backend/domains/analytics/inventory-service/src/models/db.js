const mysql = require("mysql2");
require("dotenv").config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 10
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error("❌ Error de conexión a MySQL:", err);
  } else {
    console.log("✅ Conexión exitosa a MySQL");
    connection.release();
  }
});

module.exports = pool;
