const express = require('express');
const dotenv = require('dotenv');
const inventoryRoutes = require('./src/routes/inventoryRoutes');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/inventory', inventoryRoutes);

const PORT = process.env.PORT || 3009;

app.listen(PORT, () => {
  console.log(`Inventory Service running on port ${PORT}`);
});
