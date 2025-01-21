const express = require('express');
const mongoose = require('mongoose');
const checkInRoutes = require('./src/routes/checkInRoutes');
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

app.use('/api/check-ins', checkInRoutes);

const PORT = process.env.PORT || 3008;

app.listen(PORT, () => {
  console.log(`Check-in Service running on port ${PORT}`);
});
