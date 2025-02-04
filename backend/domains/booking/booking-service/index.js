require("dotenv").config();
const express = require("express");
const bookingRoutes = require("./src/routes/bookingRoutes");
const requestLogger = require("./src/utils/middleware/requestLogger");
const errorHandler = require("./src/utils/middleware/errorHandler");

const app = express();
app.use(express.json());
app.use(requestLogger);

app.use("/bookings", bookingRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
  console.log(`Booking Service running on port ${PORT}`);
});
