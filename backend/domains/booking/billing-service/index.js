require("dotenv").config();
const express = require("express");
const billingRoutes = require("./src/routes/billingRoutes");
const requestLogger = require("./src/utils/middleware/requestLogger");
const errorHandler = require("./src/utils/middleware/errorHandler");

const app = express();
app.use(express.json());
app.use(requestLogger);

app.use("/billing", billingRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3015;
app.listen(PORT, () => {
  console.log(`Billing Service running on port ${PORT}`);
});
