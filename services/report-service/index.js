const express = require('express');
const reportRoutes = require('./src/routes/reportRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());

app.use('/api/reports', reportRoutes);

const PORT = process.env.PORT || 3011;

app.listen(PORT, () => {
  console.log(`Report Service running on port ${PORT}`);
});
