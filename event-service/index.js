const express = require('express');
const mongoose = require('mongoose');
const eventRoutes = require('./src/routes/eventRoutes');
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

app.use('/api/events', eventRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Event Service running on port ${PORT}`);
});
