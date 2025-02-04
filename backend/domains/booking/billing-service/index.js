const express = require('express');
const dotenv = require('dotenv');
const billingRoutes = require('./src/routes/billingRoutes');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/billing', billingRoutes);

const PORT = process.env.PORT || 3015;

app.listen(PORT, () => {
  console.log(`Billing Service running on port ${PORT}`);
});
