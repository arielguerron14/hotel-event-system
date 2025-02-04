const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const loyaltyRoutes = require('./src/routes/loyaltyRoutes');

dotenv.config();

const app = express();
app.use(express.json());
app.use('/loyalty', loyaltyRoutes);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Loyalty Service connected to MongoDB'))
  .catch((err) => console.error('Database connection error:', err));

const PORT = process.env.PORT || 3017;
app.listen(PORT, () => {
  console.log(`Loyalty Service running on port ${PORT}`);
});
