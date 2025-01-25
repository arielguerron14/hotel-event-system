const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const feedbackRoutes = require('./src/routes/feedbackRoutes');

dotenv.config();

const app = express();
app.use(express.json());
app.use('/feedback', feedbackRoutes);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Feedback Service connected to MongoDB'))
  .catch((err) => console.error('Database connection error:', err));

const PORT = process.env.PORT || 3010;
app.listen(PORT, () => {
  console.log(`Feedback Service running on port ${PORT}`);
});
