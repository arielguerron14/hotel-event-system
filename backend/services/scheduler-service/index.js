const express = require('express');
const dotenv = require('dotenv');
const schedulerRoutes = require('./src/routes/schedulerRoutes');

dotenv.config();

const app = express();
app.use(express.json());

// Ruta de prueba en la raíz
app.get('/', (req, res) => {
  res.send('Scheduler Service is running!');
});

// Ruta de salud
app.get('/health', (req, res) => {
  res.json({ status: 'OK', service: 'scheduler-service' });
});

app.use('/schedules', schedulerRoutes);

const PORT = process.env.PORT || 3018;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Scheduler Service running on port ${PORT}`);
});

