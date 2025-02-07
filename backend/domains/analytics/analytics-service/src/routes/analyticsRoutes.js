const express = require("express");
const router = express.Router();
const { getBookingStats, getRevenueStats } = require("../controllers/analyticsController");

router.get("/bookings", getBookingStats);
router.get("/revenue", getRevenueStats);

module.exports = router;
