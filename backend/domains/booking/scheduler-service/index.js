require("dotenv").config();
const express = require("express");
const schedulerRoutes = require("./src/routes/schedulerRoutes");
const requestLogger = require("./src/utils/middleware/requestLogger");
const errorHandler = require("./src/utils/middleware/errorHandler");

const app = express();
app.use(express.json());
app.use(requestLogger);

app.use("/schedules", schedulerRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3018;
app.listen(PORT, () => {
  console.log(`Scheduler Service running on port ${PORT}`);
});
