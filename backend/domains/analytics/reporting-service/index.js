require("dotenv").config();
const express = require("express");
const reportingRoutes = require("./src/routes/reportRoutes"); // Confirma que el nombre es correcto
const requestLogger = require("./src/utils/middleware/requestLogger");
const errorHandler = require("./src/utils/middleware/errorHandler");

const app = express();
app.use(express.json());
app.use(requestLogger);

app.use("/reporting", reportingRoutes); // **IMPORTANTE: Aquí se define el prefijo de ruta**

app.use(errorHandler);

const PORT = process.env.PORT || 3014;
app.listen(PORT, () => {
  console.log(`Reporting Service running ${PORT}`);
});
