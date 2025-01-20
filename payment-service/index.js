const express = require('express');
const paymentRoutes = require('./src/routes/paymentRoutes');

const app = express();
app.use(express.json());
app.use('/api/payments', paymentRoutes);

const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Payment Service running on port ${PORT}`);
});