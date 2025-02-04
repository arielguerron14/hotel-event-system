const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.use(express.json());

// Ruta para enviar notificaciones
app.post("/send", (req, res) => {
  const { type, message, recipient } = req.body;
  console.log(`Sending ${type} notification to ${recipient}: ${message}`);
  res.json({ success: true, message: "Notification sent successfully!" });
});

const PORT = process.env.PORT || 3003;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Notification Service running on port ${PORT}`);
});
