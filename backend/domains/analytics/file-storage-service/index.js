require("dotenv").config();
const express = require("express");
const fileStorageRoutes = require("./src/routes/fileStorageRoutes");
const requestLogger = require("./src/utils/middleware/requestLogger");
const errorHandler = require("./src/utils/middleware/errorHandler");

const app = express();
app.use(express.json());
app.use(requestLogger);

app.use("/files", fileStorageRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3019;
app.listen(PORT, () => {
  console.log(`File Storage Service running on port ${PORT}`);
});
