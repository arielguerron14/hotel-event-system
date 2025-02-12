require("dotenv").config();
const express = require("express");
const reportingRoutes = require("./src/routes/reportingRoutes");
const requestLogger = require("./src/utils/middleware/requestLogger");
const errorHandler = require("./src/utils/middleware/errorHandler");

const app = express();
app.use(express.json());
app.use(requestLogger);

app.use("/reports", reportingRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3014;
app.listen(PORT, () => {
  console.log(`Reporting Service running on port ${PORT}`);
});
