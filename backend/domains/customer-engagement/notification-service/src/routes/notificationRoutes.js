const express = require("express");
const router = express.Router();
const { sendNotification, getNotifications } = require("../controllers/notificationController");

router.get("/", getNotifications);
router.post("/", sendNotification);

module.exports = router;
