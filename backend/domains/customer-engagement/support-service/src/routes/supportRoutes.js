const express = require("express");
const router = express.Router();
const { getSupportTickets, createSupportTicket } = require("../controllers/supportController");

router.get("/", getSupportTickets);
router.post("/", createSupportTicket);

module.exports = router;
