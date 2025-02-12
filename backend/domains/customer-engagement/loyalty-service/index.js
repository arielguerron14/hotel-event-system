require("dotenv").config();
const express = require("express");
const loyaltyRoutes = require("./src/routes/loyaltyRoutes");
const requestLogger = require("./src/utils/middleware/requestLogger");
const errorHandler = require("./src/utils/middleware/errorHandler");

const app = express();
app.use(express.json());
app.use(requestLogger);

app.use("/loyalty", loyaltyRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3017;
app.listen(PORT, () => {
  console.log(`Loyalty Service running on port ${PORT}`);
});
