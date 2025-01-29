const express = require('express');
const dotenv = require('dotenv');
const feedbackRoutes = require('./src/routes/feedbackRoutes');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/feedback', feedbackRoutes);

const PORT = process.env.PORT || 3010;

app.listen(PORT, () => {
  console.log(`Feedback Service running on port ${PORT}`);
});
