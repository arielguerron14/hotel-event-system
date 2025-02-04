const express = require('express');
const dotenv = require('dotenv');
const reviewRoutes = require('./src/routes/reviewRoutes');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/reviews', reviewRoutes);

const PORT = process.env.PORT || 3007;

app.listen(PORT, () => {
  console.log(`Review Service running on port ${PORT}`);
});
