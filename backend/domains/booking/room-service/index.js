require("dotenv").config();
const express = require("express");
const roomRoutes = require("./src/routes/roomRoutes");
const requestLogger = require("./src/utils/middleware/requestLogger");
const errorHandler = require("./src/utils/middleware/errorHandler");

const app = express();
app.use(express.json());
app.use(requestLogger);

app.use("/rooms", roomRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3013;
app.listen(PORT, () => {
  console.log(`Room Service running on port ${PORT}`);
});
