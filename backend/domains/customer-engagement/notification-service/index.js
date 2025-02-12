require("dotenv").config();
const express = require("express");
const notificationRoutes = require("./src/routes/notificationRoutes");
const requestLogger = require("./src/utils/middleware/requestLogger");
const errorHandler = require("./src/utils/middleware/errorHandler");

const app = express();
app.use(express.json());
app.use(requestLogger);

app.use("/notifications", notificationRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Notification Service running on port ${PORT}`);
});
