require("dotenv").config();
const express = require("express");
const cors = require("cors");
const inventoryRoutes = require("./src/routes/inventoryRoutes");
const requestLogger = require("./src/utils/middleware/requestLogger");
const errorHandler = require("./src/utils/middleware/errorHandler");

const app = express();
app.use(express.json());
app.use(cors());
app.use(requestLogger);

app.use("/api/inventory", inventoryRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3009;
app.listen(PORT, () => {
  console.log(`Inventory Service runn
    ing on port ${PORT}`);
});
