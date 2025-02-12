require("dotenv").config();
const express = require("express");
const notificationPreferencesRoutes = require("./src/routes/notificationPreferencesRoutes");
const requestLogger = require("./src/utils/middleware/requestLogger");
const errorHandler = require("./src/utils/middleware/errorHandler");

const app = express();
app.use(express.json());
app.use(requestLogger);

app.use("/preferences", notificationPreferencesRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3011;
app.listen(PORT, () => {
  console.log(`Notification Preferences Service running on port ${PORT}`);
});
