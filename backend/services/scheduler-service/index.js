const express = require('express');
const dotenv = require('dotenv');
const schedulerRoutes = require('./src/routes/schedulerRoutes');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/schedules', schedulerRoutes);

const PORT = process.env.PORT || 3018;

app.listen(PORT, () => {
  console.log(`Scheduler Service running on port ${PORT}`);
});
