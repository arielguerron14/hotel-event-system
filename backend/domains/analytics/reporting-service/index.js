const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const reportRoutes = require('./src/routes/reportRoutes');

dotenv.config();

const app = express();
app.use(express.json());
app.use('/reports', reportRoutes);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Reporting Service connected to MongoDB'))
  .catch((err) => console.error('Database connection error:', err));

const PORT = process.env.PORT || 3014;
app.listen(PORT, () => {
  console.log(`Reporting Service running on port ${PORT}`);
});
