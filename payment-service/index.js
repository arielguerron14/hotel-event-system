const express = require('express');
const mongoose = require('mongoose');
const paymentRoutes = require('./src/routes/paymentRoutes');
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

app.use('/api/payments', paymentRoutes);

const PORT = process.env.PORT || 3003;

app.listen(PORT, () => {
  console.log(`Payment Service running on port ${PORT}`);
});
