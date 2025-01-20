const express = require('express');
const eventRoutes = require('./src/routes/eventRoutes');

const app = express();
app.use(express.json());
app.use('/api/events', eventRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Event Service running on port ${PORT}`);
});