const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const supportRoutes = require('./src/routes/supportRoutes');

dotenv.config();

const app = express();
app.use(express.json());
app.use('/support', supportRoutes);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Support Service connected to MongoDB'))
  .catch((err) => console.error('Database connection error:', err));

const PORT = process.env.PORT || 3016;
app.listen(PORT, () => {
  console.log(`Support Service running on port ${PORT}`);
});

