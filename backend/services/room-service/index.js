const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const roomRoutes = require('./src/routes/roomRoutes');

dotenv.config();

const app = express();
app.use(express.json());
app.use('/rooms', roomRoutes);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Room Service connected to MongoDB'))
  .catch((err) => console.error('Database connection error:', err));

const PORT = process.env.PORT || 3013;
app.listen(PORT, () => {
  console.log(`Room Service running on port ${PORT}`);
});

