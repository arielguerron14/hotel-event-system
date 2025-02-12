require("dotenv").config();
const express = require("express");
const emailRoutes = require("./src/routes/emailRoutes");
const requestLogger = require("./src/utils/middleware/requestLogger");
const errorHandler = require("./src/utils/middleware/errorHandler");

const app = express();
app.use(express.json());
app.use(requestLogger);

app.use("/emails", emailRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3012;
app.listen(PORT, () => {
  console.log(`Email Service running on port ${PORT}`);
});
