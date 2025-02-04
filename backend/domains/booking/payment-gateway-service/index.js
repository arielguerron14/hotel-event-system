const express = require('express');
const dotenv = require('dotenv');
const paymentGatewayRoutes = require('./src/routes/paymentGatewayRoutes');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/payment-gateway', paymentGatewayRoutes);

const PORT = process.env.PORT || 3023;

app.listen(PORT, () => {
  console.log(`Payment Gateway Service running on port ${PORT}`);
});
