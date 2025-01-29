const express = require('express');
const dotenv = require('dotenv');
const notificationRoutes = require('./src/routes/notificationRoutes');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/notifications', notificationRoutes);

const PORT = process.env.PORT || 3003;

app.listen(PORT, () => {
  console.log(`Notification Service running on port ${PORT}`);
});
