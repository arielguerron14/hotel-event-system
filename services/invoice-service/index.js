const express = require('express');
const mongoose = require('mongoose');
const invoiceRoutes = require('./src/routes/invoiceRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Database connection error:', err);
});

app.use('/api/invoices', invoiceRoutes);

const PORT = process.env.PORT || 3013;

app.listen(PORT, () => {
  console.log(`Invoice Service running on port ${PORT}`);
});
