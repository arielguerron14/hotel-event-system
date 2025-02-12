require("dotenv").config();
const express = require("express");
const paymentGatewayRoutes = require("./src/routes/paymentGatewayRoutes");
const requestLogger = require("./src/utils/middleware/requestLogger");
const errorHandler = require("./src/utils/middleware/errorHandler");

const app = express();
app.use(express.json());
app.use(requestLogger);

app.use("/gateway", paymentGatewayRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3023;
app.listen(PORT, () => {
  console.log(`Payment Gateway Service running on port ${PORT}`);
});
