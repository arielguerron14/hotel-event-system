const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./src/routes/userRoutes');

dotenv.config();

const app = express();
app.use(express.json());
app.use('/users', userRoutes);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('User Profile Service connected to MongoDB'))
  .catch((err) => console.error('Database connection error:', err));

const PORT = process.env.PORT || 3006;
app.listen(PORT, () => {
  console.log(`User Profile Service running on port ${PORT}`);
});
