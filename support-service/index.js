const express = require('express');
const mongoose = require('mongoose');
const supportRoutes = require('./src/routes/supportRoutes');
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

app.use('/api/support', supportRoutes);

const PORT = process.env.PORT || 3015;

app.listen(PORT, () => {
  console.log(`Support Service running on port ${PORT}`);
});
