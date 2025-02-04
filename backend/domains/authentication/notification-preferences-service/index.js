require("dotenv").config();
const express = require("express");
const preferencesRoutes = require("./src/routes/preferencesRoutes");

const app = express();
app.use(express.json());

app.use("/preferences", preferencesRoutes);

const PORT = process.env.PORT || 3011;
app.listen(PORT, () => {
  console.log(`Notification Preferences Service running on port ${PORT}`);
});
