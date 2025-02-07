require("dotenv").config();
const express = require("express");
const eventRoutes = require("./src/routes/eventRoutes");
const requestLogger = require("./src/utils/middleware/requestLogger");
const errorHandler = require("./src/utils/middleware/errorHandler");

const app = express();
app.use(express.json());
app.use(requestLogger);

app.use("/events", eventRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3022;
app.listen(PORT, () => {
  console.log(`Event Service running on port ${PORT}`);
});
