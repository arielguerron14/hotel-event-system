require("dotenv").config();
const express = require("express");
const feedbackRoutes = require("./src/routes/feedbackRoutes");
const requestLogger = require("./src/utils/middleware/requestLogger");
const errorHandler = require("./src/utils/middleware/errorHandler");

const app = express();
app.use(express.json());
app.use(requestLogger);

app.use("/feedback", feedbackRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3010;
app.listen(PORT, () => {
  console.log(`Feedback Service running on port ${PORT}`);
});
