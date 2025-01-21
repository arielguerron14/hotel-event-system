const express = require('express');
const mongoose = require('mongoose');
const analyticsRoutes = require('./src/routes/analyticsRoutes');
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

app.use('/api/analytics', analyticsRoutes);

const PORT = process.env.PORT || 3010;

app.listen(PORT, () => {
  console.log(`Analytics Service running on port ${PORT}`);
});
