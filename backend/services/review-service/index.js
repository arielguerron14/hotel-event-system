const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const reviewRoutes = require('./src/routes/reviewRoutes');

dotenv.config();

const app = express();
app.use(express.json());
app.use('/reviews', reviewRoutes);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Review Service connected to MongoDB'))
  .catch((err) => console.error('Database connection error:', err));

const PORT = process.env.PORT || 3007;
app.listen(PORT, () => {
  console.log(`Review Service running on port ${PORT}`);
});
