const express = require('express');
const mongoose = require('mongoose');
const inventoryRoutes = require('./src/routes/inventoryRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Database connection error:', err);
});

app.use('/api/inventory', inventoryRoutes);

const PORT = process.env.PORT || 3014;

app.listen(PORT, () => {
  console.log(`Inventory Service running on port ${PORT}`);
});
