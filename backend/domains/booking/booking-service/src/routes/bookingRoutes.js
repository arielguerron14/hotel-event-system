const express = require("express");
const router = express.Router();
const { getBookings, createBooking, cancelBooking } = require("../controllers/bookingController");

router.get("/", getBookings);
router.post("/", createBooking);
router.delete("/:id", cancelBooking);

module.exports = router;
