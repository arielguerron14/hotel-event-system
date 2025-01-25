const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const analyticsRoutes = require('./src/routes/analyticsRoutes');

dotenv.config();

const app = express();
app.use(express.json());
app.use('/analytics', analyticsRoutes);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Analytics Service connected to MongoDB'))
  .catch((err) => console.error('Database connection error:', err));

const PORT = process.env.PORT || 3008;
app.listen(PORT, () => {
  console.log(`Analytics Service running on port ${PORT}`);
});
