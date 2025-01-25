const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const schedulerRoutes = require('./src/routes/schedulerRoutes');
const { startScheduler } = require('./src/utils/schedulerHelper');

dotenv.config();

const app = express();
app.use(express.json());
app.use('/scheduler', schedulerRoutes);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Scheduler Service connected to MongoDB'))
  .catch((err) => console.error('Database connection error:', err));

// Inicia el programador de tareas
startScheduler();

const PORT = process.env.PORT || 3018;
app.listen(PORT, () => {
  console.log(`Scheduler Service running on port ${PORT}`);
});
