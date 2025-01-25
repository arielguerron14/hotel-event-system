const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const billingRoutes = require('./src/routes/billingRoutes');

dotenv.config();

const app = express();
app.use(express.json());
app.use('/billing', billingRoutes);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Billing Service connected to MongoDB'))
  .catch((err) => console.error('Database connection error:', err));

const PORT = process.env.PORT || 3015;
app.listen(PORT, () => {
  console.log(`Billing Service running on port ${PORT}`);
});

