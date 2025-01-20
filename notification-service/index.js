const express = require('express');
const notificationRoutes = require('./src/routes/notificationRoutes');

const app = express();
app.use(express.json());
app.use('/api/notifications', notificationRoutes);

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Notification Service running on port ${PORT}`);
});