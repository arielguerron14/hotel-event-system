const express = require('express');
const mongoose = require('mongoose');
const notificationRoutes = require('./src/routes/notificationRoutes');
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

app.use('/api/notifications', notificationRoutes);

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`Notification Service running on port ${PORT}`);
});
