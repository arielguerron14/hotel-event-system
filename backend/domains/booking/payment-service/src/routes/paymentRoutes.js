const express = require("express");
const router = express.Router();
const { processPayment, getPayments } = require("../controllers/paymentController");

router.get("/", getPayments);
router.post("/", processPayment);

module.exports = router;
