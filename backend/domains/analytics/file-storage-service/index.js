require("dotenv").config();
const express = require("express");
const cors = require("cors");
const fileRoutes = require("./src/routes/fileRoutes");
const requestLogger = require("./src/utils/middleware/requestLogger");
const errorHandler = require("./src/utils/middleware/errorHandler");

const app = express();
app.use(express.json());
app.use(cors());
app.use(requestLogger);

app.use("/api/files", fileRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3019;
app.listen(PORT, () => {
  console.log(`File Storage Service running on port ${PORT}`);
});