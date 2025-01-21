const express = require('express');
const mongoose = require('mongoose');
const userProfileRoutes = require('./src/routes/userProfileRoutes');
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

app.use('/api/user-profiles', userProfileRoutes);

const PORT = process.env.PORT || 3004;

app.listen(PORT, () => {
  console.log(`User Profile Service running on port ${PORT}`);
});
