const express = require('express');
const mongoose = require('mongoose');
const feedbackRoutes = require('./src/routes/feedbackRoutes');
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

app.use('/api/feedbacks', feedbackRoutes);

const PORT = process.env.PORT || 3009;

app.listen(PORT, () => {
  console.log(`Feedback Service running on port ${PORT}`);
});

