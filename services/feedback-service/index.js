const express = require('express');
const mongoose = require('mongoose');
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

app.get('/health', (req, res) => {
  res.send('Feedback Service is running');
});

const PORT = process.env.PORT || 3009;
app.listen(PORT, () => {
  console.log(`Feedback Service running on port ${PORT}`);
});
