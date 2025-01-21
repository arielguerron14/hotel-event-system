const express = require('express');
const mongoose = require('mongoose');
const loyaltyRoutes = require('./src/routes/loyaltyRoutes');
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

app.use('/api/loyalty', loyaltyRoutes);

const PORT = process.env.PORT || 3019;

app.listen(PORT, () => {
  console.log(`Loyalty Program Service running on port ${PORT}`);
});
