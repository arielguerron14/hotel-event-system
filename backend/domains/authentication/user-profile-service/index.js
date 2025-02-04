require("dotenv").config();
const express = require("express");
const userRoutes = require("./src/routes/userRoutes");
const requestLogger = require("./src/utils/middleware/requestLogger");
const errorHandler = require("./src/utils/middleware/errorHandler");

const app = express();
app.use(express.json());
app.use(requestLogger);

app.use("/users", userRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3006;
app.listen(PORT, () => {
  console.log(`User Profile Service running on port ${PORT}`);
});
