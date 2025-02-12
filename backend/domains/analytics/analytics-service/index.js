require("dotenv").config();
const express = require("express");
const analyticsRoutes = require("./src/routes/analyticsRoutes");
const requestLogger = require("./src/utils/middleware/requestLogger");
const errorHandler = require("./src/utils/middleware/errorHandler");

const app = express();
app.use(express.json());
app.use(requestLogger);

app.use("/analytics", analyticsRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3008;
app.listen(PORT, () => {
  console.log(`Analytics Service running on port ${PORT}`);
});
