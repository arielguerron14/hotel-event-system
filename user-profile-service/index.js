const express = require('express');
const mongoose = require('mongoose');
const discountRoutes = require('./src/routes/discountRoutes');
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

app.use('/api/discounts', discountRoutes);

const PORT = process.env.PORT || 3012;

app.listen(PORT, () => {
  console.log(`Discount Service running on port ${PORT}`);
});
