const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fileRoutes = require('./src/routes/fileRoutes');

dotenv.config();

const app = express();
app.use(express.json());
app.use('/uploads', express.static('uploads')); // Exponer archivos cargados como estáticos
app.use('/files', fileRoutes);

// Conexión a MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('File Storage Service connected to MongoDB'))
  .catch((err) => console.error('Database connection error:', err));

const PORT = process.env.PORT || 3019;
app.listen(PORT, () => {
  console.log(`File Storage Service running on port ${PORT}`);
});
