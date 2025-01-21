const express = require('express');
const mongoose = require('mongoose');
const menuRoutes = require('./src/routes/menuRoutes');
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

app.use('/api/menus', menuRoutes);

const PORT = process.env.PORT || 3007;

app.listen(PORT, () => {
  console.log(`Food and Beverage Service running on port ${PORT}`);
});
