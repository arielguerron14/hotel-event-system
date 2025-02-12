require("dotenv").config();
const express = require("express");
const paymentRoutes = require("./src/routes/paymentRoutes");
const requestLogger = require("./src/utils/middleware/requestLogger");
const errorHandler = require("./src/utils/middleware/errorHandler");

const app = express();
app.use(express.json());
app.use(requestLogger);

app.use("/payments", paymentRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Payment Service running on port ${PORT}`);
});
