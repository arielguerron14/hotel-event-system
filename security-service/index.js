const express = require('express');
const mongoose = require('mongoose');
const securityRoutes = require('./src/routes/securityRoutes');
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

app.use('/api/security', securityRoutes);

const PORT = process.env.PORT || 3018;

app.listen(PORT, () => {
  console.log(`Security Service running on port ${PORT}`);
});
