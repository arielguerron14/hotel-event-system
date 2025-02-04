require("dotenv").config();
const express = require("express");
const userRoutes = require("./src/routes/userRoutes");

const app = express();
app.use(express.json());

app.use("/users", userRoutes);

const PORT = process.env.PORT || 3006;
app.listen(PORT, () => {
  console.log(`User Profile Service running on port ${PORT}`);
});
