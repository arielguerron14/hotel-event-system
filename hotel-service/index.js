const express = require('express');
const mongoose = require('mongoose');
const hotelRoutes = require('./src/routes/hotelRoutes');
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

app.use('/api/hotels', hotelRoutes);

const PORT = process.env.PORT || 3005;

app.listen(PORT, () => {
  console.log(`Hotel Service running on port ${PORT}`);
});
