const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const preferencesRoutes = require('./src/routes/preferencesRoutes');

dotenv.config();

const app = express();
app.use(express.json());
app.use('/preferences', preferencesRoutes);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Notification Preferences Service connected to MongoDB'))
  .catch((err) => console.error('Database connection error:', err));

const PORT = process.env.PORT || 3011;
app.listen(PORT, () => {
  console.log(`Notification Preferences Service running on port ${PORT}`);
});
