const express = require('express');
const mongoose = require('mongoose');
const calendarRoutes = require('./src/routes/calendarRoutes');
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

app.use('/api/calendar', calendarRoutes);

const PORT = process.env.PORT || 3016;

app.listen(PORT, () => {
  console.log(`Calendar Service running on port ${PORT}`);
});
