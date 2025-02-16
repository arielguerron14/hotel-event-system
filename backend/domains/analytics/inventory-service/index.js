require("dotenv").config();
const express = require("express");
const inventoryRoutes = require("./src/routes/inventoryRoutes");
const requestLogger = require("./src/utils/middleware/requestLogger");
const errorHandler = require("./src/utils/middleware/errorHandler");

const app = express();
app.use(express.json());
app.use(requestLogger);

app.use("/inventory", inventoryRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3009;
app.listen(PORT, () => {
  console.log(`Inventory Service running ${PORT}`);
});
