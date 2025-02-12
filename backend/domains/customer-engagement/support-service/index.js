require("dotenv").config();
const express = require("express");
const supportRoutes = require("./src/routes/supportRoutes");
const requestLogger = require("./src/utils/middleware/requestLogger");
const errorHandler = require("./src/utils/middleware/errorHandler");

const app = express();
app.use(express.json());
app.use(requestLogger);

app.use("/support", supportRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3016;
app.listen(PORT, () => {
  console.log(`Support Service running on port ${PORT}`);
});
