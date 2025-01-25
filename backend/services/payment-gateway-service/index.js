const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const gatewayRoutes = require('./src/routes/gatewayRoutes');

dotenv.config();

const app = express();
app.use(express.json());
app.use('/gateway', gatewayRoutes);

// Conexión a MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Payment Gateway Service connected to MongoDB'))
  .catch((err) => console.error('Database connection error:', err));

const PORT = process.env.PORT || 3023;
app.listen(PORT, () => {
  console.log(`Payment Gateway Service running on port ${PORT}`);
});
