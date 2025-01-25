const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const emailRoutes = require('./src/routes/emailRoutes');

dotenv.config();

const app = express();
app.use(express.json());
app.use('/emails', emailRoutes);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Email Service connected to MongoDB'))
  .catch((err) => console.error('Database connection error:', err));

const PORT = process.env.PORT || 3012;
app.listen(PORT, () => {
  console.log(`Email Service running on port ${PORT}`);
});
