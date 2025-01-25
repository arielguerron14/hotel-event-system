const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const eventRoutes = require('./src/routes/eventRoutes');

dotenv.config();

const app = express();
app.use(express.json());
app.use('/events', eventRoutes);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Event Service connected to MongoDB'))
  .catch((err) => console.error('Database connection error:', err));

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Event Service running on port ${PORT}`);
});
