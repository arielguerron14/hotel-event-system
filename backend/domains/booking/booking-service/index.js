const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bookingRoutes = require('./src/routes/bookingRoutes');

dotenv.config();

const app = express();
app.use(express.json());
app.use('/bookings', bookingRoutes);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Booking Service connected to MongoDB'))
  .catch((err) => console.error('Database connection error:', err));

const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
  console.log(`Booking Service running on port ${PORT}`);
});
