const express = require('express');
const dotenv = require('dotenv');
const analyticsRoutes = require('./src/routes/analyticsRoutes');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/analytics', analyticsRoutes);

const PORT = process.env.PORT || 3008;

app.listen(PORT, () => {
  console.log(`Analytics Service running on port ${PORT}`);
});
