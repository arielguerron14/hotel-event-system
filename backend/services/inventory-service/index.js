const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const inventoryRoutes = require('./src/routes/inventoryRoutes');

dotenv.config();

const app = express();
app.use(express.json());
app.use('/inventory', inventoryRoutes);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Inventory Service connected to MongoDB'))
  .catch((err) => console.error('Database connection error:', err));

const PORT = process.env.PORT || 3009;
app.listen(PORT, () => {
  console.log(`Inventory Service running on port ${PORT}`);
});
