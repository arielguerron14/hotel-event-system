const express = require('express');
const mongoose = require('mongoose');
const vendorRoutes = require('./src/routes/vendorRoutes');
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

app.use('/api/vendors', vendorRoutes);

const PORT = process.env.PORT || 3017;

app.listen(PORT, () => {
  console.log(`Vendor Management Service running on port ${PORT}`);
});
