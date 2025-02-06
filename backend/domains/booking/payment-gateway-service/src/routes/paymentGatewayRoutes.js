const express = require("express");
const router = express.Router();
const { processStripePayment, processPayPalPayment } = require("../controllers/paymentGatewayController");

router.post("/stripe", processStripePayment);
router.post("/paypal", processPayPalPayment);

module.exports = router;
