require("dotenv").config();
const express = require("express");
const reviewRoutes = require("./src/routes/reviewRoutes");
const requestLogger = require("./src/utils/middleware/requestLogger");
const errorHandler = require("./src/utils/middleware/errorHandler");

const app = express();
app.use(express.json());
app.use(requestLogger);

app.use("/reviews", reviewRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3007;
app.listen(PORT, () => {
  console.log(`Review Service running on port ${PORT}`);
});
